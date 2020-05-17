import { useState } from "react";
import { useHistory } from "react-router-dom";
import qs from "qs";

export interface UrlQuery {
   character?: string;
   comic?: string;
}

export function useUrlQuery(): UrlQuery {
   return qs.parse(useHistory().location.search, { ignoreQueryPrefix: true });
}

export type AsyncReducer<S, A> = (prevState: S, action: A) => Promise<Partial<S>>;
export function useAsyncReducer<T, A>(
   reducer: AsyncReducer<T, A>,
   initial: T = null,
): [T, (action: A) => Promise<void>] {
   const [state, setState] = useState<T>(initial);
   let newState: T = {...state};
   const dispatch = async (action: A) => {
      const result = await reducer(state, action);
      newState = {...newState, ...result}
      setState(newState);
   };

   return [state, dispatch];
}