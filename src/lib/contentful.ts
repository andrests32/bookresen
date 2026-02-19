// src/lib/contentful.ts
import { createClient } from "contentful";

export const client = createClient({
    space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.PUBLIC_CONTENTFUL_PREVIEW_TOKEN,
    host: "preview.contentful.com",
});