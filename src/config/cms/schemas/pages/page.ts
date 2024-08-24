import { defineArrayMember, defineConfig, defineField } from "sanity";

import InputSlug from "../../components/seo/InputSlug";
import { SearchIcon, ComposeIcon } from "@sanity/icons";
// import { modules } from "./componentsList";
import { slugGeneration } from "../../lib/slug";

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
      components: {
        input: InputSlug,
      },
      options: {
        // isBlog: true,
        // source: "title",
        source: (doc: any) => `${doc.language}/${doc.title}`,
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => slugGeneration(input),
      },
      group: "seo",
    }),

    // defineField({
    //   name: "modules",
    //   type: "array",
    //   title: "Content | Treść strony",
    //   of: modules.map((section) => ({
    //     type: section.name,
    //   })),
    //   group: "content",
    //   options: {
    //     insertMenu: {
    //       filter: true,
    //       groups: [
    //         {
    //           name: "intro",
    //           title: "Intro",
    //           of: ["blog-list"],
    //         },
    //         {
    //           name: "storytelling",
    //           title: "Storytelling",
    //         },
    //         {
    //           name: "upsell",
    //           title: "Upsell",
    //           of: ["blog-list", "breadcrumbs"],
    //         },
    //       ],
    //       views: [
    //         {
    //           name: "grid",
    //           // previewImageUrl: (schemaTypeName) =>
    //           //   `/assets/section/preview-${schemaTypeName}.png`,
    //         },
    //       ],
    //     },
    //   },
    // }),

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
      lang: "language",
    },
    prepare(selection: { title: string; slug: string; lang: string }) {
      const { title, slug, lang } = selection;
      const slugWhitOutLang = slug.slice(3);
      const subtitleCurrent = slugWhitOutLang === "#" ? `/${lang}/` : `${slug}`;
      return {
        title: title,
        subtitle: subtitleCurrent,
      };
    },
  },
} as any);
