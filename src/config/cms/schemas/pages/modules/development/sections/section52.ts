import { defineField, defineType } from "sanity";
const name = "Section 52";
export default defineType({
  name: "section52",
  type: "object",
  title: name,
  preview: {
    select: {
      title: "title",
      category: "development",
      section: "section",
      image: "/assets/section/section52.png",
    },
    prepare({ title, image }) {
      return {
        title: title || "slide",
        subtitle: name,
        media: image,
      };
    },
  },
  fields: [
    defineField({
      title: "Dark Mode ",
      description: "section dark mode",
      name: "sectionDarkMode",
      type: "boolean",
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
  ],
});
