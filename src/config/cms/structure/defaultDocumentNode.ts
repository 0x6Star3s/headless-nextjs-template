import {
  DefaultDocumentNodeContext,
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
          preview: (document: any) => {
            const slug = document?.slug?.current;
            if (slug) {
              return `/${slug}`;
            } else {
              return new Error("Missing slug");
            }
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

export const defaultDocumentNode = (
  S: StructureBuilder,
  context: DefaultDocumentNodeContext
  // { schemaType }
) => {
  const schemaType = context?.schemaType;
  // switch (schemaType) {
  //   case `pages`:
  //     const pagesViews = documentViews(S)
  //     return pagesViews
  //   case `article`:
  //     const articleViews = documentViews(S)
  //     return articleViews
  //   default:
  //     return S.document().views([S.view.form()])
  //

  if (schemaType === "pages" || schemaType === "blog.post") {
    return documentViews(S);
  } else {
    return S.document().views([S.view.form()]);
  }
};
