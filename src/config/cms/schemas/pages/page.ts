import { defineArrayMember, defineConfig, defineField } from "sanity";

import { SearchIcon, ComposeIcon } from "@sanity/icons";
import { filterModules, modules } from "./componentsList";

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
      title: "Title site",
      description:
        "Read title yours site, a next create for your address URL, which will be easy to find in internet. if you wont main page write (index)",
      type: "string",
      group: "seo",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Website address",
      description:
        "The address of the page on the website, which will be easy to find in the internet.",
      type: "slug",
      options: {
        source: (doc: any) => doc.title,
        maxLength: 200, // will be ignored if slugify is set
      },
      group: "seo",
    }),

    defineField({
      name: "modules",
      type: "array",
      title: "Content",
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
              name: "development",
              title: "Development",
              of: [
                ...filterModules("development").map(
                  (section) => section.type.name
                ),
              ],
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
    prepare(selection: { title: string; slug: string }) {
      const { title, slug } = selection;
      const subtitleCurrent = slug === "index" ? `/` : `/${slug}`;
      return {
        title: title || "Page",
        subtitle: subtitleCurrent,
      };
    },
  },
} as any);
