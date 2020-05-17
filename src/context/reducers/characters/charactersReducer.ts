import {
   getAllCharacters,
   getCharactersByName,
   getThumbnailUrl,
} from "../../../Api/characters/characters";
import { HttpRequestResponse } from "../../../Api/tools/httpRequest";
import { CharactersResponse } from "../../../Api/tools/typings";
import { AsyncReducer } from "../../../tools/hooks";
import { CharactersActionTypes } from "../../actions/characters/charactersActions";
import { Action, State } from "../../store";
import { CharacterData } from "../../store/characters/charactersState";

export const charactersReducer: AsyncReducer<State, Action<string | CharacterData>> = async (
   state,
   action,
) => {
   switch (action.type) {
      case CharactersActionTypes.ClearList:
         return {
            characterList: null,
         };
      case CharactersActionTypes.CharactersRequest:
         return {
            characterList: reduceCharactersList(
               await getCharactersByName(action.payload as string),
            ),
         };
      case CharactersActionTypes.RandomCharacterRequest:
         let characterList = reduceCharactersList(await getAllCharacters());
         if (characterList.length > 0) {
            characterList = [characterList[Math.floor(characterList.length * Math.random())]];
         }
         return {
            characterList,
         };
      case CharactersActionTypes.SelectCharacter:
         return {
            selectedCharacter: action.payload as CharacterData,
         };
      default:
         return {};
   }
};

const reduceCharactersList = (
   request: HttpRequestResponse<CharactersResponse>,
): CharacterData[] => {
   if (request.success) {
      const serverCharacters = request.content.data?.results ?? [];
      const finalCharactersList = serverCharacters.map(character => ({
         name: character.name,
         thumbnailUrl: getThumbnailUrl(character.thumbnail),
         id: character.id,
      }));
      return finalCharactersList;
   }
   return [];
};
