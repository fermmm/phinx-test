import { createContext } from "react";
import { CharactersActionTypes } from "../actions/characters/charactersActions";
import { ComicsActionTypes } from "../actions/comics/comicsActions";
import { CharactersState, initialCharactersState } from "./characters/charactersState";
import { ComicsState, initialComicsState } from "./comics/comicsState";

export type State = CharactersState & ComicsState;

export const initialState: State = {
   ...initialCharactersState,
   ...initialComicsState,
};

export interface Action<T = {}> {
   type: CharactersActionTypes | ComicsActionTypes;
   payload?: T;
}

export const GlobalStateContext = createContext<{
   state: State;
   dispatch: <T>(action: Action<T>) => void;
}>({ state: initialState, dispatch: () => {} });
