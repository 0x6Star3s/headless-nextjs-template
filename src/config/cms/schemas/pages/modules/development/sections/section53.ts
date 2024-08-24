import { defineField, defineType } from "sanity";
const name = "Section 53";
export default defineType({
  name: "section53",
  type: "object",
  title: name,
  preview: {
    select: {
      title: "title",
      category: "development",
      section: "section",
      image:
        "/assets/section/section53.png",
    },
    prepare({ title, image }) {
      return {
        title: title || "slide",
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
      title: "Reverse",
      description: "Reverse the slides",
      name: "reverse",
      type: "boolean",
    }),
    defineField({
      name: "title",
      type: "string",
      fieldset: "groupTitle",
    }),

    defineField({
      name: "subtitle",
      type: "string",
      fieldset: "groupTitle",
    }),

    defineField({
      name: "description",
      type: "text",
      fieldset: "groupTitle",
    }),

    defineField({
      name: "cta",
      title: "Element",
      type: "elementCtaType",
    }),
    defineField({ name: "source", type: "videoAndImageType" }),
  ],
});
