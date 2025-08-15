export type EventType = {
page:{
    number: number,
    size: number,
    totalElements: number,
    totalPages: number,
};
_embedded?: {
    events?: {
        id: string;
      name: string;
      dates?: {start: {localDate: string}}
      url?: string;
      type: string;
      images?: {
        height: number;
        width: number;
        ratio: string;
        url: string;
      }[];
          _embedded?: {
                venues?: {
                    id: string;
                    name: string;
                    country?: { name: string };
                    city?: { name: string };
                    url?: string;
                    type: string;
                }[];
                attractions?: {
                    id: string;
                    name: string;
                    country?: { name: string };
                    city?: { name: string };
                    url?: string;
                    type: string;
                }[];
  };
    }[];

  };
};