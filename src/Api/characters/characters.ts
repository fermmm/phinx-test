import { httpRequest, HttpRequestResponse } from "../tools/httpRequest";
import { CharactersComicsResponse, CharactersResponse, ThumbnailData } from "../tools/typings";
import { SERVER_URL, PUBLIC_API_KEY } from "../../configs";

export async function getCharactersByName(
   name: string,
): Promise<HttpRequestResponse<CharactersResponse>> {
   return httpRequest<CharactersResponse>({
      url: `${SERVER_URL}characters?nameStartsWith=${name}&apikey=${PUBLIC_API_KEY}`,
   });
}

export async function getAllCharacters(): Promise<HttpRequestResponse<CharactersResponse>> {
   return httpRequest<CharactersResponse>({
      url: `${SERVER_URL}characters?apikey=${PUBLIC_API_KEY}`,
   });
}

export async function getComicsByCharacterId(
   characterId: number,
): Promise<HttpRequestResponse<CharactersComicsResponse>> {
   return httpRequest<CharactersComicsResponse>({
      url: `${SERVER_URL}characters/${characterId}/comics?apikey=${PUBLIC_API_KEY}`,
   });
}

export function getThumbnailUrl(thumbnailData: ThumbnailData, size: ThumbnailSize = ThumbnailSize.PortraitUncanny): string {
   return `${thumbnailData.path}/${size}.${thumbnailData.extension}`;
}

export enum ThumbnailSize {
   PortraitSmall = "portrait_small", // 50x75px
   PortraitMedium = "portrait_medium", // 100x150px
   PortraitXlarge = "portrait_xlarge", // 150x225px
   PortraitFantastic = "portrait_fantastic", // 168x252px
   PortraitUncanny = "portrait_uncanny", // 300x450px
   PortraitIncredible = "portrait_incredible", // 216x324px
}
