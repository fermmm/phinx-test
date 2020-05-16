import qs from "qs";
import { useHistory } from "react-router-dom";

export interface UrlQuery {
   character?: string;
   comic?: string;
}

export function useUrlQuery(): UrlQuery {
   return qs.parse(useHistory().location.search, { ignoreQueryPrefix: true });
}