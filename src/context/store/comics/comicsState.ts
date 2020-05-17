import { ThumbnailData } from "../../../Api/tools/typings";

export interface ComicsState {
   comicList: ComicData[];
   selectedComic: ComicData;
   comicFilter: string;
}

export const initialComicsState: ComicsState = {
   comicList: [],
   selectedComic: null,
   comicFilter: null
};

export interface ComicData {
   id: number;
   title: string;
   publishedDate: string;
   creators: { role: string; name: string }[];
   description: string;
   thumbnailData: ThumbnailData;
}