import { defineField, defineType } from "sanity";
import { TfiLayoutCtaCenter } from "react-icons/tfi";
import { getBlockText } from "../../../../src/utils";

export default defineType({
  name: "hero.saas",
  title: "Hero (SaaS)",
  icon: TfiLayoutCtaCenter,
  type: "object",
  groups: [{ name: "options", title: "Options" }],
  fields: [
    defineField({
      name: "pretitle",
      type: "string",
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "ctas",
      title: "Call-to-actions",
      type: "array",
      of: [{ type: "cta" }],
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
        }),
        defineField({
          name: "faded",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "loading",
          type: "string",
          options: {
            layout: "radio",
            list: ["lazy", "eager"],
          },
          initialValue: "lazy",
        }),
        defineField({
          name: "uid",
          title: "Unique Identifier",
          type: "uid",
          group: "options",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      content: "content",
      media: "image",
      category: "block",
    },
    prepare: ({ content, media }) => ({
      title: getBlockText(content),
      subtitle: "Hero (SaaS)",
      media,
    }),
  },
});
