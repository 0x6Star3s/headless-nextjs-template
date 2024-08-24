import {
  StructureBuilder,
  type DefaultDocumentNodeResolver,
} from "sanity/structure";
import { Iframe } from "sanity-plugin-iframe-pane";
const baseUrl = process.env.NEXT_PUBLIC_URL;
const documentViews = (S: StructureBuilder) => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: {
          origin: baseUrl,
          // Auth
          preview: (document: any) => {
            const slug = document?.slug?.current;
            const slugWithOutLang = slug?.slice(3);
            const slugLang = slug?.slice(0, 2);
            // console.log(slugWithOutLang, slugLang);

            
            if (slugWithOutLang === "index") {
              return `/${slugLang}/`;
            } else if (slug) {
              return `/${slug}`;
            } else {
              return new Error("Missing slug");
            }

            // if (slugWithOutLang.startWith("blog")) {
            //   return slug;
            // } else
          },
        },
        draftMode: "/api/draft",
        reload: {
          button: true, // default `undefined`
        },
      })
      .title("Preview"),
  ]);
};

export const preview: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  const documentValues = documentViews(S);
  switch (schemaType) {
    case `pages`:
      return documentValues;
    case `blog.post`:
      return documentValues;
    default:
      return S.document().views([S.view.form()]);
  }

  // if (schemaType === 'pages' || schemaType === 'article') {
  //   return documentViews(S)
  // } else {
  //   return S.document().views([S.view.form()])
  // }
};
