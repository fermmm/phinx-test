export interface CharactersResponse {
   code: number;
   status: string;
   copyright: string;
   attributionText: string;
   attributionHTML: string;
   data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: CharacterData[];
   };
   etag: string;
}

export interface CharactersComicsResponse {
   code: number;
   status: string;
   copyright: string;
   attributionText: string;
   attributionHTML: string;
   data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: ComicData[];
   };
   etag: string;
}

export interface ComicData {
   id: number;
   digitalId: number;
   title: string;
   issueNumber: number;
   variantDescription: string;
   description: string;
   modified: "Date";
   isbn: string;
   upc: string;
   diamondCode: string;
   ean: string;
   issn: string;
   format: string;
   pageCount: number;
   textObjects: [
      {
         type: string;
         language: string;
         text: string;
      },
   ];
   resourceURI: string;
   urls: [
      {
         type: string;
         url: string;
      },
   ];
   series: {
      resourceURI: string;
      name: string;
   };
   variants: [
      {
         resourceURI: string;
         name: string;
      },
   ];
   collections: [
      {
         resourceURI: string;
         name: string;
      },
   ];
   collectedIssues: [
      {
         resourceURI: string;
         name: string;
      },
   ];
   dates: [
      {
         type: string;
         date: "Date";
      },
   ];
   prices: [
      {
         type: string;
         price: "float";
      },
   ];
   thumbnail: ThumbnailData;
   images: [
      {
         path: string;
         extension: string;
      },
   ];
   creators: {
      available: number;
      returned: number;
      collectionURI: string;
      items: [
         {
            resourceURI: string;
            name: string;
            role: string;
         },
      ];
   };
   characters: {
      available: number;
      returned: number;
      collectionURI: string;
      items: [
         {
            resourceURI: string;
            name: string;
            role: string;
         },
      ];
   };
   stories: {
      available: number;
      returned: number;
      collectionURI: string;
      items: [
         {
            resourceURI: string;
            name: string;
            type: string;
         },
      ];
   };
   events: {
      available: number;
      returned: number;
      collectionURI: string;
      items: [
         {
            resourceURI: string;
            name: string;
         },
      ];
   };
}

export interface CharacterData {
   id: number;
   name: string;
   description: string;
   modified: "Date";
   resourceURI: string;
   urls: [
      {
         type: string;
         url: string;
      },
   ];
   thumbnail: ThumbnailData;
   comics: {
      available: number;
      returned: number;
      collectionURI: string;
      items: [
         {
            resourceURI: string;
            name: string;
         },
      ];
   };
   stories: {
      available: number;
      returned: number;
      collectionURI: string;
      items: [
         {
            resourceURI: string;
            name: string;
            type: string;
         },
      ];
   };
   events: {
      available: number;
      returned: number;
      collectionURI: string;
      items: [
         {
            resourceURI: string;
            name: string;
         },
      ];
   };
   series: {
      available: number;
      returned: number;
      collectionURI: string;
      items: [
         {
            resourceURI: string;
            name: string;
         },
      ];
   };
}

export interface ThumbnailData {
   path: string;
   extension: string;
}
