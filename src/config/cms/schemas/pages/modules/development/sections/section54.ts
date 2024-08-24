import { defineField, defineType } from "sanity";
const name = "Section 54";
export default defineType({
  name: "section54",
  type: "object",
  title: name,
  preview: {
    select: {
      title: "title",
      category: "development",
      section: "section",
      image: "/assets/section/section54.png",
    },
    prepare({ title, image }) {
      return {
        title: title || "CarInfo",
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
      title: "content",
      description: "section content",
      name: "content",
      type: "array",
      of: [
        {
          name: "slide",
          type: "object",
          fields: [
            { name: "reverse", type: "boolean" },
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "source", type: "videoAndImageType" },
          ],
        },
      ],
    }),
  ],
});
