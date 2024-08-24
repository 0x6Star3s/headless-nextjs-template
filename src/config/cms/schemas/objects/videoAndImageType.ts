import { defineField, defineType } from "sanity";
const name = "ImageType";
export default defineType({
  name: "videoAndImageType",
  type: "object",
  title: name,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
      };
    },
  },
  fieldsets: [
    {
      title: "Assets",
      name: "groupImage",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "viewVideo",
      type: "boolean",
      title: "View Video",
      description: "Show video instead of image",
      fieldset: "groupImage",
    }),
    defineField({
      name: "video",
      description: "Add Url where the video is hosted",
      type: "url",
      fieldset: "groupImage",
    }),

    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fieldset: "groupImage",
    }),

    defineField({
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
      fieldset: "groupImage",
    }),
  ],
});
