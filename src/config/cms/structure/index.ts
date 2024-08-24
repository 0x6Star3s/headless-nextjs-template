import { i18n } from "../../i18n";

import { StructureResolverContext, StructureBuilder } from "sanity/structure";
import { itemListLanguage } from "./desk/itemListLanguage";

import { CogIcon } from "@sanity/icons";
import { BsDatabaseAdd } from "react-icons/bs";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Website")
    .items([
      ...i18n.languages.map((language) =>
        S.listItem()
          .title(language.title)
          .id(language.id)
          .child(
            S.list()
              .title(language.title)
              .items([
                // S.divider(),
                itemListLanguage(S, {
                  title: "Pages",
                  type: "pages",
                  languageId: language.id,
                }),
                S.divider(),
                itemListLanguage(S, {
                  title: "Blog posts",
                  type: "blog.post",
                  languageId: language.id,
                }),
                itemListLanguage(S, {
                  title: "Blog categories",
                  type: "blog.category",
                  languageId: language.id,
                }),
                itemListLanguage(S, {
                  title: "Blog authors",
                  type: "blog.author",
                  languageId: language.id,
                }),
                S.divider(),
                itemListLanguage(S, {
                  title: "Navigation",
                  type: "navigation",
                  languageId: language.id,
                }),
                S.listItem()
                  .id("miscellaneous")
                  .title("Miscellaneous")
                  .icon(BsDatabaseAdd)
                  .child(
                    S.list().title("Miscellaneous").items([
                      // itemListLanguage(S, {
                      //   title: "Frequently Asked Questions",
                      //   type: "navbar",
                      //   languageId: language.id,
                      // }),
                      // itemListLanguage(S, {
                      //   title: "Testimonials",
                      //   type: "navbar",
                      //   languageId: language.id,
                      // }),
                    ])
                  ),
              ])
          )
      ),
      S.divider(),
      S.documentTypeListItem("redirect").title("Redirects"),
      S.documentTypeListItem("message").title("Message"),
      S.listItem()
        .title("settings")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Site")
                .schemaType("site")
                .child(S.document().schemaType("site")),
              S.listItem()
                .title("SEO")
                .schemaType("config.seo")
                .child(S.document().schemaType("config.seo")),

              S.listItem()
                .title("Integration")
                .schemaType("config.integrations")
                .child(S.document().schemaType("config.integrations")),
            ])
        ),
    ]);
