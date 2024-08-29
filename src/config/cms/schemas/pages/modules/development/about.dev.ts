import { defineField, defineType } from "sanity";
import { TfiLayoutCtaLeft } from "react-icons/tfi";
import { getBlockText } from "../../../../src/utils";
import {
  textAlign,
  alignItems,
  alignmentFieldset,
} from "../../../fragments/fields/alignment";

export default defineType({
  name: "about.dev",
  title: "About (Dev)",
  icon: TfiLayoutCtaLeft,
  type: "object",
  groups: [
    { name: "content", default: true },
    { name: "image" },
    { name: "options" },
  ],
  fieldsets: [alignmentFieldset],
  fields: [
    defineField({
      name: "pretitle",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }],
      group: "content",
    }),
    defineField({
      name: "ctas",
      title: "Call-to-actions",
      type: "array",
      of: [{ type: "cta" }],
      group: "content",
    }),
    defineField({
      name: "imageType",
      title: "image",
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
          name: "loading",
          type: "string",
          options: {
            layout: "radio",
            list: ["lazy", "eager"],
          },
          initialValue: "lazy",
        }),
      ],
      group: "image",
    }),
    defineField({
      name: "layout",
      title: "Layout",
      description: "Choose the layout of the content.",
      type: "object",
      fields: [
        defineField({
          name: "fullscreen",
          title: "Full Screen",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "layoutVariant",
          title: "Layout Variant",
          type: "string",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Right", value: "right" },
            ],
            layout: "radio",
          },
        }),
      ],
      group: "options",
    }),

    defineField({
      name: "uid",
      title: "Unique Identifier",
      type: "uid",
      group: "options",
    }),
  ],

  preview: {
    select: {
      content: "content",
      media: "imageType",
    },
    prepare: ({ content, media }) => ({
      title: getBlockText(content),
      subtitle: "About (Dev)",
      media,
    }),
  },
});
