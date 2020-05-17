import { State, Action } from "../store";
import { charactersReducer } from "./characters/charactersReducer";
import { AsyncReducer } from "../../tools/hooks";
import { comicsReducer } from './comics/comicsReducer';

const reducers: AsyncReducer<State, Action>[] = [
   charactersReducer,
   comicsReducer
];

export const mergedReducer: AsyncReducer<State, Action> = async (prevState, action) => {
   let newState: Partial<State> = {};
   for (const reducer of reducers) {
      newState = {...newState, ...await reducer(prevState, action)};
   }

   return newState;
 };