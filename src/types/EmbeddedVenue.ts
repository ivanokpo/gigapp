export type EmbeddedVenue = {
  id: string;
  name: string;
  country?: { name: string };
  city?: { name: string };
  url?: string;
  type: string;
};
