export interface CharactersState {
   characterList: CharacterData[];
   selectedCharacter: CharacterData;
}

export const initialCharactersState: CharactersState = {
   characterList: [],
   selectedCharacter: null
};

export interface CharacterData {
   name: string;
   thumbnailUrl: string;
   id: number;
}
