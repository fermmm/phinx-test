import moment from "moment";
import { getComicsByCharacterId, getThumbnailUrl } from "../../../Api/characters/characters";
import { HttpRequestResponse } from "../../../Api/tools/httpRequest";
import { AsyncReducer } from "../../../tools/hooks";
import { ComicsActionTypes } from "../../actions/comics/comicsActions";
import { Action, State } from "../../store";
import { ComicData } from "../../store/comics/comicsState";
import { CharactersComicsResponse } from "./../../../Api/tools/typings";

export const comicsReducer: AsyncReducer<State, Action<number | ComicData | string>> = async (
   state,
   action,
) => {
   switch (action.type) {
      case ComicsActionTypes.ClearList:
         return {
            comicList: null,
         };
      case ComicsActionTypes.ComicsRequest:
         return {
            comicList: reduceComicList(await getComicsByCharacterId(action.payload as number)),
         };
      case ComicsActionTypes.SelectComic:
         return {
            selectedComic: action.payload as ComicData,
         };
      case ComicsActionTypes.ComicFilter:
         return {
            comicFilter: action.payload as string,
         };
      default:
         return {};
   }
};

const reduceComicList = (request: HttpRequestResponse<CharactersComicsResponse>): ComicData[] => {
   if (request.success) {
      const serverComics = request.content.data?.results ?? [];
      const finalComicsList = serverComics.map(comic => ({
         id: comic.id,
         title: comic.title,
         publishedDate: moment(comic.dates.find(d => d.type === "onsaleDate")?.date).format(
            "MMM DD, YYYY",
         ),
         creators: comic.creators.items,
         description: comic.description,
         thumbnailUrl: getThumbnailUrl(comic.thumbnail),
      }));
      return finalComicsList;
   }
   return [];
};
