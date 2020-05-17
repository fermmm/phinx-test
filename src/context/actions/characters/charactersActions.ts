import { CharacterData } from '../../store/characters/charactersState';

export enum CharactersActionTypes {
   ClearList = "CharactersClearList",
   CharactersRequest = "CharactersRequest",
   RandomCharacterRequest = "RandomCharacterRequest",
   SelectCharacter = "SelectCharacter",
}

export const clearCharactersListAction = () => ({
   type: CharactersActionTypes.ClearList
});

export const requestCharactersAction = (name: string) => ({
   type: CharactersActionTypes.CharactersRequest,
   payload: name
});


export const selectCharacterAction = (character: CharacterData) => ({
   type: CharactersActionTypes.SelectCharacter,
   payload: character
});

export const randomCharacterRequestAction = () => ({
   type: CharactersActionTypes.RandomCharacterRequest
});
