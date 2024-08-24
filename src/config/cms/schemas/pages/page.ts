import { defineArrayMember, defineConfig, defineField } from "sanity";

import { SearchIcon, ComposeIcon } from "@sanity/icons";
import { filterModules, modules } from "./componentsList";
import { slugGeneration } from "../../lib/slug";

console.log("modules", [
  ...filterModules("modules").map((section) => section.type.name),
]);

export default defineConfig({
  name: "page",
  title: "Pages",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
      icon: ComposeIcon,
    },
    {
      name: "seo",
      title: "SEO",
      icon: SearchIcon,
    },
  ],
  fieldsets: [
    {
      title: "seo & social sharing",
      name: "seo",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Tytuł strony",
      description:
        "Wpisz tytuł swojej strony, a następnie stworzę dla niej adres URL, który będzie łatwy do znalezienia w internecie.",
      type: "string",
      group: "seo",
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Adres strony internetowej",
      type: "slug",
      options: {
        source: (doc: any) => `${doc.language}/${doc.title}`,
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => slugGeneration(input),
      },
      group: "seo",
    }),

    defineField({
      name: "modules",
      type: "array",
      title: "Content | Treść strony",
      of: modules.map((section) => ({
        type: section.type.name,
      })),
      group: "content",
      options: {
        insertMenu: {
          filter: true,
          groups: [
            {
              name: "modules",
              title: "Modules",
              of: [
                ...filterModules("modules").map((section) => section.type.name),
              ],
            },
            {
              name: "upsell",
              title: "Upsell",
              of: ["blog-list", "breadcrumbs"],
            },
          ],
          views: [
            {
              name: "grid",
              // previewImageUrl: (schemaTypeName) =>
              //   `/assets/section/preview-${schemaTypeName}.png`,
            },
          ],
        },
      },
    }),

    defineField({
      name: "metadata",
      type: "metadata",
      fieldset: "seo",
      group: "seo",
    }),
  ],

  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare(selection: { title: string; slug: string;}) {
      const { title, slug } = selection;
      const subtitleCurrent = slug === "index" ? `/` : `${slug}`;
      return {
        title: title,
        subtitle: subtitleCurrent,
      };
    },
  },
} as any);
