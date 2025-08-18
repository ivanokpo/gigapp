// export type EventType = {
//   page: {
//     number: number;
//     size: number;
//     totalElements: number;
//     totalPages: number;
//   };
//   _embedded?: {
//     events?: {
//       id: string;
//       name: string;
//       dates?: { start: { localDate: string } };
//       url: string;
//       type: string;
//       images?: {
//         height: number;
//         width: number;
//         ratio: string;
//         url: string;
//       }[];
//       _embedded?: {
//         venues?: {
//           id: string;
//           name: string;
//           country?: { name: string };
//           city?: { name: string };
//           url?: string;
//           type: string;
//         }[];
//         attractions?: {
//           id: string;
//           name: string;
//           country?: { name: string };
//           city?: { name: string };
//           url?: string;
//           type: string;
//         }[];
//       };
//     }[];
//   };
// };

import z from "zod";
export const embeddedVenuesObjectType = z.object({
   id: z.string(),
   name: z.string(),
   country: z.object({ name: z.string() }).optional().nullable(),
   city: z.object({ name: z.string() }).optional().nullable(),
   url: z.string().optional().nullable(),
   type: z.string().optional().nullable()
});
export type EmbeddedVenuesObjectType = z.infer<typeof embeddedVenuesObjectType>;
export const embeddedAttractionsObjectType = z.object({
  id: z.string(),
   name: z.string(),
   country: z.object({ name: z.string() }).optional().nullable(),
   city: z.object({ name: z.string() }).optional().nullable(),
   url: z.string().optional().nullable(),
   type: z.string().optional().nullable()
});
export type EmbeddedAttractionsObjectType = z.infer<typeof embeddedAttractionsObjectType>;
export const eventObjectType = z.object({
  id: z.string(),
      name: z.string(),
      dates: z.object({ 
        start: z.object({ localDate: z.string() }) 
      }).optional().nullable(),
      url: z.string(),
      type: z.string(),
      images: z.array(z.object({
        height: z.number(),
        width: z.number(),
        ratio: z.string(),
        url: z.string()
      })).optional().nullable(),
      _embedded: z.object({
        venues: z.array(embeddedVenuesObjectType),
        attractions: z.array(embeddedAttractionsObjectType)
      })
    }
    );
export type EventObjectType = z.infer<typeof eventObjectType>;
export const eventResponseType = z.object({
  page: z.object({
    number: z.number(),
    size: z.number(),
    totalElements: z.number(),
    totalPages: z.number()
  }),
  _embedded: z.object({
    events: z.array(eventObjectType),

  }).optional().nullable()
});
export type EventResponseType = z.infer<typeof eventResponseType>;

