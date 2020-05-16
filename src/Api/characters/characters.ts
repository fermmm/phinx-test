import { httpRequest, HttpRequestResponse } from "../tools/httpRequest";
import { CharactersResponse, ThumbnailData, CharactersComicsResponse } from "../tools/typings";

export async function getCharactersByName(
   name: string,
): Promise<HttpRequestResponse<CharactersResponse>> {
   return httpRequest<CharactersResponse>({
      url: `${process.env.SERVER_URL}characters?nameStartsWith=${name}&apikey=${process.env.PUBLIC_API_KEY}`,
   });
}

export async function getAllCharacters(): Promise<HttpRequestResponse<CharactersResponse>> {
   return httpRequest<CharactersResponse>({
      url: `${process.env.SERVER_URL}characters?apikey=${process.env.PUBLIC_API_KEY}`,
   });
}

export async function getComicsByCharacterId(
   characterId: number,
): Promise<HttpRequestResponse<CharactersComicsResponse>> {
   return httpRequest<CharactersComicsResponse>({
      url: `${process.env.SERVER_URL}characters/${characterId}/comics?apikey=${process.env.PUBLIC_API_KEY}`,
   });
}

export function getThumbnailUrl(thumbnailData: ThumbnailData): string {
   return `${thumbnailData.path}/portrait_uncanny.${thumbnailData.extension}`;
}