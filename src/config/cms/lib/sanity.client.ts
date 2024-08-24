import { HiLanguage } from "react-icons/hi2";
import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from "./sanity.api";
import {
  // indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsSiteQuery,
  // pageBuilderQuery,
  pagesSlugsQuery,
  categoryQuery,
  getAllSlugQuery,
} from "./sanity.queries";


import { createClient, type SanityClient } from "next-sanity";

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
    stega: {
      enabled: preview?.token ? true : false,
      studioUrl,
    },
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}

export const getSanityImageConfig = () => getClient();

export async function getSettings(
  client: SanityClient,
  language: string
): Promise<Settings> {
  return (await client.fetch(settingsSiteQuery, { language })) || {};
}

export async function getAllPostsSlugs(): Promise<Pick<Post, "slug">[]> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getAllSlug() {
  const client = getClient();
  const slugs =
    (await client.fetch<{
      post: string[];
      pages: string[];
    }>(getAllSlugQuery)) || [];
  return slugs;
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string,
  language: string
): Promise<{ post: Post; morePosts: Post[]; language: string }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug, language });
}

// export async function getPageBySlug(
//   client: SanityClient,
//   slug: string,
//   language: string
// ): Promise<any> {
//   // const slug2 = slug ? slug : 'home'
//   return await client.fetch(pageBuilderQuery, { slug, language });
// }

export async function getAllPages(): Promise<Pick<Post, "slug">[]> {
  const client = getClient();
  const slugs = (await client.fetch<string[]>(pagesSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

// export async function getFiltredPosts(
//   searchValue: string,
//   category: string[],
//   currentPage: number,
//   maxBloks: number,
//   language: string
// ): Promise<any> {
//   const convertArrayToString = (arr: string[]) => {
//     return "[" + arr.map(item => `'${item}'`).join(", ") + "]";
//   };
//   const filter = `${searchValue ? `&& title match "${searchValue}*"` : ""} ${
//     category.length > 0
//       ? `&& blog.category[]->title match ${convertArrayToString(category)}`
//       : ""
//   }`;
//   const query = `{
//     "post": *[_type == "blog.post" ${filter} language == ${language}] | order(_createdAt desc)[${(currentPage - 1) * maxBloks}...${currentPage * maxBloks}]{
//       ...,
//       // author->{name, picture},
//     },
//     "totalPosts": count(*[_type == "blog.post" ${filter}])
//   }`;
//   const client = getClient();
//   return await client.fetch(query);
// }

export async function getFiltredPosts(
  searchValue: string | undefined,
  searchPage: number,
  categors: string[],
  maxPost: number,
  lang: string
): Promise<{
  posts: any[];
  totalPosts: number;
}> {
  const categories = categors.join(",");
  const res = await fetch("/api/blog", {
    method: "POST",
    body: JSON.stringify({
      searchValue,
      searchPage,
      categories,
      maxPost,
      lang,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
}

// const response = await axios.get(`https://api.example.com/categories`, {
//   headers: {
//     'Authorization': `Bearer ${token}`,
//     'Accept-Language': lang
//   }
// });

// export async function getCategories(
//   lang: string
// ): Promise<{ categors: { title: string }[] }> {
//   const res = await axios.post("/api/category", {
//     body: JSON.stringify({ lang }),
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
//       // "Accept-Language": lang,
//     },
//   });
//   // const res = await fetch("/api/category", {
//   //   method: "POST",
//   //   body: JSON.stringify({
//   //     lang,
//   //   }),
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
//   //   },
//   // });
//   if (!res.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const data = await res.json();
//   return data;
// }
export async function getCategories(
  lang: string
): Promise<{ categors: { title: string }[] }> {
  try {
    const res = await axios.post(
      "/api/category",
      { lang }, // payload do body w formacie JSON
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          "Accept-Language": lang, // jeśli chcesz dodać nagłówek dla języka
          // "Set-Cookie": `Bearer ${process.env.NEXT_PUBLIC_TOKEN}; Secure`,
        },
      }
    );

    // axios automatycznie parsuje odpowiedź jako JSON, więc można od razu zwrócić dane
    return res.data;
  } catch (error) {
    // Możesz obsłużyć błędy w bardziej szczegółowy sposób
    throw new Error(`Error fetching categories: ${error}`);
  }
}

export async function getLastCreactedArticle(
  language: string
): Promise<Post[]> {
  const client = getClient();
  return await client.fetch(
    `*[_type == "blog.post" language == ${language}] | order(_createdAt desc)[0...2]{
      ...,
      // author->{name, picture},
    }`
  );
}
