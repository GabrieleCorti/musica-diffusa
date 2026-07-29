import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const news = defineCollection({
  type: "content",
  schema: z.object({
    titolo: z.string(),
    luogo: z.string(),
    data: z.string(),
    ora: z.string(),
  }),
});
const docenti = defineCollection({
  type: "content",
  schema: z.object({
    titolo: z.string(),
    nome: z.string(),
    strumento: z.string(),
    proPic: z.string().refine((val) => val.startsWith("/src/assets/"), {
      message: "L'immagine deve essere in /src/assets/",
    }),
    instagram: z.string().url().nullable().optional(),
    youtube: z.string().url().nullable().optional(),
    website: z.string().url().nullable().optional(),
    facebook: z.string().url().nullable().optional(),
  }),
});
const corsi = defineCollection({
  type: "content",
  schema: z.object({
    titolo: z.string(),
    pic: z.string().refine((val) => val.startsWith("/src/assets/"), {
      message: "L'immagine deve essere in /src/assets/",
    }),
  }),
});

export const collections = { news, docenti, corsi };
