import { defineField, defineType } from "sanity";
import { CiViewColumn } from "react-icons/ci";
import { alignmentFieldset } from "../../../fragments/fields/alignment";

const nameFile = "Services (Dev)";

export default defineType({
  name: "services.dev",
  title: nameFile,
  icon: CiViewColumn,
  type: "object",
  groups: [{ name: "content", default: true }, { name: "options" }],
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
      name: "servicesGroup",
      title: "Services Group",
      description: "Add your services here",
      type: "array",
      of: [
        defineField({
          name: "serviceType",
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
            defineField({
              name: "title",
              description: "Title of your service",
              type: "string",
            }),
            defineField({
              name: "content",
              description: "Description of your service",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
          preview: {
            select: {
              media: "image",
              title: "title",
            },
            prepare: ({ media, title }) => ({
              title: title || "untitled",
              media,
            }),
          },
        }),
      ],
      group: "content",
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
