import { defineField, defineType } from "sanity";
import { VscTag } from "react-icons/vsc";

export default defineType({
  name: "blog.category",
  title: "Blog category",
  type: "document",
  icon: VscTag,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
  ],
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
});
