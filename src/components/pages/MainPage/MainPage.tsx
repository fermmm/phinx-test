import moment from "moment";
import React, { FC, useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import {
   getAllCharacters,
   getCharactersByName,
   getComicsByCharacterId,
   getThumbnailUrl,
} from "../../../Api/characters/characters";
import { CharacterData, ComicData } from "../../../Api/tools/typings";
import { UrlQuery, useUrlQuery } from "../../../tools/hooks";
import LoadingSpinner from "../../UIComponents/LoadingSpinner/LoadingSpinner";
import Modal from "../../UIComponents/Modal/Modal";
import { PropsCharacter } from "./CharacterGallery/Character/Character";
import CharacterGallery from "./CharacterGallery/CharacterGallery";
import ComicFullInfo from "./ComicFullInfo/ComicFullInfo";
import ComicItem from "./ComicItem/ComicItem";
import { MainPageContainer } from "./MainPage.styles";
import SearchBar from "./SearchBar/SearchBar";

const MainPage: FC = () => {
   let mounted: boolean = true;
   const urlQuery: UrlQuery = useUrlQuery();
   const [searchBarText, setSearchBarText] = useState<string>("");
   const [comicFilter, setComicFilter] = useState<string>();
   const [characterList, setCharactersList] = useState<CharacterData[]>([]);
   const [comicsList, setComicsList] = useState<ComicData[]>([]);
   const [selectedCharacter, setSelectedCharacter] = useState<PropsCharacter>();
   const [modalVisible, setModalVisible] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(false);
   const [loadingComics, setLoadingComics] = useState<boolean>(false);
   const [showComicFullInfo, setShowComicFullInfo] = useState<boolean>(false);
   const [selectedComic, setSelectedComic] = useState<ComicData>();

   useEffect(() => {
      requestDataUsingUrlQuery();
      return () => (mounted = false);
   }, []);

   const requestDataUsingUrlQuery = async () => {
      if (urlQuery.character) {
         setLoading(true);
         const request = await getCharactersByName(urlQuery.character);

         if (!mounted) {
            return;
         }
         setLoading(false);

         if (!request.success) {
            return;
         }

         if (request.content.data.results?.length === 0) {
            alert("No characters found with the filters on the url.");
            return;
         }

         if (urlQuery.comic) {
            const characterWithComic = request.content.data.results.find(
               character =>
                  character.comics.items.find(comic =>
                     comic.name.startsWith(urlQuery.comic),
                  ) != null,
            );
            if (characterWithComic != null) {
               setComicFilter(urlQuery.comic);
               setCharactersList([characterWithComic]);
            }
         } else {
            alert("No comic found in the url query. Only a character search will be performed.");
            if (mounted) {
               setCharactersList(request.content.data.results);
            }
         }
      } else {
         setLoading(true);
         const request = await getAllCharacters();
         if (!mounted) {
            return;
         }
         setLoading(false);
         const charactersList = request.content.data.results;
         if (request.success) {
            setCharactersList([charactersList[Math.floor(charactersList.length * Math.random())]]);
         }
      }
   };

   const requestDataUsingSearchBarText = async () => {
      if (searchBarText.length === 0) {
         return;
      }
      setCharactersList([]);
      setShowComicFullInfo(false);
      setLoading(true);
      const request = await getCharactersByName(searchBarText);
      if (!mounted) {
         return;
      }
      setLoading(false);
      if (request.success) {
         setComicFilter(null);
         setCharactersList(request.content.data?.results ?? []);
      }
   };

   const requestComicsList = async (character: PropsCharacter) => {
      setComicsList([]);
      setSelectedCharacter(character);
      setLoadingComics(true);
      setModalVisible(true);
      const request = await getComicsByCharacterId(character.id);
      if (!mounted) {
         return;
      }
      setLoadingComics(false);
      if (request.success) {
         setComicsList(request.content.data?.results ?? []);
      }
   };

   return (
      <MainPageContainer>
         <SearchBar
            value={searchBarText}
            onChange={setSearchBarText}
            onUserStopsTyping={requestDataUsingSearchBarText}
         />
         {loading && <LoadingSpinner />}
         {!showComicFullInfo && (
            <CharacterGallery
               onClick={requestComicsList}
               characters={characterList.map(character => ({
                  name: character.name,
                  thumbnailUrl: getThumbnailUrl(character.thumbnail),
                  id: character.id,
               }))}
            />
         )}
         {showComicFullInfo && (
            <ComicFullInfo
               title={selectedComic.title}
               publishedDate={moment(
                  selectedComic.dates.find(d => d.type === "onsaleDate")?.date,
               ).format("MMM DD, YYYY")}
               creators={selectedComic.creators.items}
               description={selectedComic.description}
               coverImageUrl={getThumbnailUrl(selectedComic.thumbnail)}
            />
         )}
         <Modal
            visible={modalVisible}
            title={selectedCharacter?.name}
            onCloseClick={() => setModalVisible(false)}
            loadingSpinnerVisible={loadingComics}
         >
            {comicsList.map(comic => 
               (!comicFilter || comic.title.startsWith(comicFilter)) && (
                  <ComicItem
                     title={comic.title}
                     description={comic.description}
                     thumbnailUrl={getThumbnailUrl(comic.thumbnail)}
                     onClick={() => {
                        setModalVisible(false);
                        setSelectedComic(comic);
                        setShowComicFullInfo(true);
                     }}
                     key={comic.id}
                  />
               )
            )}
            {!loadingComics && comicsList.length === 0 && "This character has no comics."}
         </Modal>
      </MainPageContainer>
   );
};

export default hot(module)(MainPage);
