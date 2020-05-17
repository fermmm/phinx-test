import { ComicData } from '../../store/comics/comicsState';

export enum ComicsActionTypes {
   ClearList = "ComicsClearList",
   ComicsRequest = "ComicsRequest",
   SelectComic = "SelectComic",
   ComicFilter = "ComicFilter",
}

export const clearComicListAction = () => ({
   type: ComicsActionTypes.ClearList
});

export const requestComicsListAction = (characterId: number) => ({
   type: ComicsActionTypes.ComicsRequest,
   payload: characterId
});

export const selectComicAction = (comic: ComicData) => ({
   type: ComicsActionTypes.SelectComic,
   payload: comic
});

export const comicFilterAction = (comicTitle: string) => ({
   type: ComicsActionTypes.ComicFilter,
   payload: comicTitle
});
