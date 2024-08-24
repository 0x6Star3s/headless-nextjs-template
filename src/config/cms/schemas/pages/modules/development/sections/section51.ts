import { defineField, defineType } from "sanity";
const name = "Section 51";
export default defineType({
  name: "section51",
  type: "object",
  title: name,
  preview: {
    select: {
      title: "title",
      category: "development",
      section: "section",
      image:
        "/assets/section/section51.png",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
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
      name: "backgroundImage",
      type: "imageType",
    }),
  ],
});
