import client from "@/lib/sanity/client";
import dev from "@/lib/env";
import { draftMode } from "next/headers";
import type { QueryParams, QueryOptions } from "next-sanity";
import { readToken } from "./api";

export { default as groq } from "groq";

export function fetchSanity<T = any>(
  query: string,
  {
    params = {},
    ...next
  }: {
    params?: QueryParams;
  } & QueryOptions["next"] = {}
) {
  const preview = draftMode().isEnabled;

  return client.fetch<T>(
    query,
    params,
    preview
      ? {
          stega: true,
          perspective: "previewDrafts",
          useCdn: false,
          token: readToken,
          next: {
            revalidate: 0,
            ...next,
          },
        }
      : {
          perspective: "published",
          useCdn: true,
          next: {
            revalidate: 3600, // every hour
            ...next,
          },
        }
  );
}
