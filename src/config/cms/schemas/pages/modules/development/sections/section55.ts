import { defineField, defineType } from "sanity";
const name = "Section 55";
export default defineType({
  name: "section55",
  type: "object",
  title: name,
  preview: {
    select: {
      title: "title",
      category: "development",
      section: "section",
      image:
        "/assets/section/section55.png",
    },
    prepare({ title, image }) {
      return {
        title: title || "undefined",
        subtitle: name,
        media: image,
      };
    },
  },
  fieldsets: [
    {
      title: "Content",
      name: "groupTitle",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      title: "Dark Mode ",
      description: "section dark mode",
      name: "sectionDarkMode",
      type: "boolean",
    }),
    defineField({
      name: "title",
      type: "string",
      fieldset: "groupTitle",
    }),

    defineField({
      name: "description",
      type: "text",
      fieldset: "groupTitle",
    }),
    defineField({
      name: "slides",
      type: "array",
      of: [
        {
          name: "slide",
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "source", type: "videoAndImageType" },
          ],
        },
      ],
    }),
    defineField({
      name: "footer",
      title: "Element",
      type: "elementFooterType",
    }),
  ],
});
