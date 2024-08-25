import { defineField, defineType } from "sanity";
import { LuGalleryVertical } from "react-icons/lu";
import { alignmentFieldset } from "../../../fragments/fields/alignment";

const nameFile = "Gallery (Dev)";

export default defineType({
  name: "gallery.dev",
  title: nameFile,
  icon: LuGalleryVertical,
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
      name: "title",
      type: "string",
      group: "content",
    }),

    defineField({
      name: "imagesGroup",
      title: "Images",
      type: "array",
      of: [
        defineField({
          name: "imageType",
          type: "object",
          fields: [
            defineField({
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alternative Text",
                  type: "string",
                }),
                defineField({
                  name: "loading",
                  title: "Loading Behavior",
                  type: "string",
                  options: {
                    layout: "radio",
                    list: [
                      { title: "Lazy", value: "lazy" },
                      { title: "Eager", value: "eager" },
                    ],
                  },
                  initialValue: "lazy",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              media: "image",
              title: "image.alt",
            },
            prepare: ({ media, title }) => ({
              title: title || "Image without alt text",
              media,
            }),
          },
        }),
      ],
      group: "image",
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
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title || "untitled",
      subtitle: nameFile,
    }),
  },
});
