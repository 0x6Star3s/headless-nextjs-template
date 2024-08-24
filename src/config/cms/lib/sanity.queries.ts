import { groq } from "next-sanity";

export const linkQuery = groq`
  ...,
  internal->{ _type, title, metadata }
`;

const navigationQuery = groq`
  title,
  items[]{
    ${linkQuery},
    link{ ${linkQuery} },
    links[]{ ${linkQuery} }
  }
`;

const postFields = groq`
  ...,
  'readTime': length(pt::text(body)) / 200,
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    title,
    slug,
    language
  },
  _id,
  title,
  body,
  _updatedAt,
  "slug": slug.current,
  "authors": authors->{name, picture},
  "categories": categories[]->{
    title,
  }
  _createdAt,
  metadata,
`;

export const settingsSiteQuery = groq`
{
  "site": *[_type == "site" && language == $language][0]{
    ...,
    ctas[]{
      ...,
      link{ ${linkQuery} }
    },
    headerMenu->{ ${navigationQuery} },
    footerMenu->{ ${navigationQuery} },
    social->{ ${navigationQuery} },
  },
  "seo": *[_type == "config.seo" && language == $language][0]{
    favicon{
      ...,
    },
    title,
    description,
    opengraphimage,

  },
  "integrations": *[_type == "config.integrations"][0]{
    gtmid,
    googleSiteVerification
      
  }
}
`;

// export const indexQuery = groq`
// *[_type == "blog.post"] | order(date desc, _updatedAt desc) {
//   ${postFields}
// }`;

export const postAndMoreStoriesQuery = groq`
{
  "blogPost": *[_type == "blog.post" && slug.current == $slug && language == $language] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePost": *[_type == "blog.post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

// pobieranie wszystkich stron slugów
export const postSlugsQuery = groq`
*[_type == "blog.post" && defined(slug.current)][].slug.current
`;

export const pagesSlugsQuery = groq`
*[_type == "pages" && defined(slug.current)][].slug.current
`;

export const getAllSlugQuery = groq`{
"post": *[_type == "blog.post" && defined(slug.current)][].slug.current,
"pages": *[_type == "pages" && defined(slug.current)][].slug.current, 
}
`;
// ------------------------------
// module queries
export const modulesQuery = groq`
  ...,
  ctas[]{
    ...,
    link{ ${linkQuery} }
  },
  _type == "blog-list" => { predefinedFilters[]-> },
  _type == "breadcrumbs" => { crumbs[]{ ${linkQuery} } },
  _type == "creative-module" => {
    modules[]{
      ...,
      subModules[]{
        ...,
        ctas[]{
          ...,
          link{ ${linkQuery} }
        }
      }
    }
  },
  _type == "logo-list" => { logos[]-> },
  _type == 'pricing-list' => { tiers[]-> },
	_type == 'richtext-module' => {
		'headings': select(
			tableOfContents => content[style in ['h2', 'h3', 'h4', 'h5', 'h6']]{
				style,
				'text': pt::text(@)
			}
		),
	},
	_type == 'testimonial.featured' => { testimonial-> },
	_type == 'testimonial-list' => { testimonials[]-> },

`;
// ------------------------------
// pobieranie stron po slugu i postów w zależności od języka
export const postBySlugQuery = groq`
*[_type == "blog.post" && slug.current == $slug && language == $language][0] {
  ${postFields},
}
`;

export const pageBySlugQuery = groq`
*[_type == "pages" && slug.current == $slug && language == $language][0]{
    ...,
    "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    title,
    slug,
    language
  },
  modules[]{ ${modulesQuery} },
  
}
`;

export const categoryQuery = groq`
*[_type == "blog.category"] | order(order asc) {
  title,
  // "slug": slug.current
}
`;

export interface Author {
  name?: string;
  picture?: any;
}

export interface Post {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  _updatedAt?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  content?: any;
}

export interface Settings {
  title?: string;
  description?: any[];
  ogImage?: {
    title?: string;
  };
}
