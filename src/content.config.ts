import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    titolo: z.string(),
    luogo: z.string(),
    data: z.string(),
    ora: z.string(),
  }),
});
const docenti = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/docenti" }),
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
  loader: glob({ pattern: "*.md", base: "./src/content/corsi" }),
  schema: z.object({
    titolo: z.string(),
    pic: z.string().refine((val) => val.startsWith("/src/assets/"), {
      message: "L'immagine deve essere in /src/assets/",
    }),
  }),
});

export const collections = { news, docenti, corsi };
