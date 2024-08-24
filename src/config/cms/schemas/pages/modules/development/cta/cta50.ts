import { defineField, defineType } from "sanity";
const name = "Cta 50";
export default defineType({
  name: "cta50",
  type: "object",
  title: name,
  preview: {
    select: {
      title: "title",
      category: "development",
      section: "cta",
      image: "/assets/section/cta50.png",
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
  initialValue: {
    titleDarkMode: false,
    sectionDarkMode: false,
  },
});
