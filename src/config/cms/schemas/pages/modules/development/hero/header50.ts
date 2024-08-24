import { defineField, defineType } from "sanity";
const name = "Header 50";
export default defineType({
  name: "header50",
  type: "object",
  title: name,
  preview: {
    select: {
      title: "title",
      category: "development",
      section: "header",
      image: "/assets/section/header50.png",
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
      title: "Title",
      name: "groupTitle",
      options: { collapsible: true, collapsed: false },
    },
    {
      title: "Elements",
      name: "groupElements",
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
      title: "Dark Mode",
      description: "title dark mode",
      name: "titleDarkMode",
      type: "boolean",
      fieldset: "groupTitle",
    }),
    defineField({
      name: "title",
      type: "string",
      fieldset: "groupTitle",
    }),
    defineField({
      name: "subtitle",
      description: "(Optional)",
      type: "string",
      fieldset: "groupTitle",
    }),
    defineField({
      name: "subtitle2",
      description: "(Optional)",
      type: "string",
      fieldset: "groupTitle",
    }),
    defineField({
      name: "backgroundImage",
      type: "imageType",
    }),

    defineField({
      name: "view",
      description: "może być użyty to schowania elementu",
      type: "boolean",
      fieldset: "groupElements",
    }),
    defineField({
      name: "content",
      type: "array",
      of: [
        {
          name: "element",
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              name: "description",
              type: "string",
            }),
          ],
        },
      ],
      fieldset: "groupElements",
    }),
    defineField({
      name: "cta",
      title: "Element",
      type: "elementCtaType",
    }),
    defineField({
      name: "footer",
      title: "Element",
      type: "elementFooterType",
    }),
  ],
  initialValue: {
    titleDarkMode: false,
    sectionDarkMode: false,
  },
});
