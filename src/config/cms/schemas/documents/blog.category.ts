import { defineField, defineType } from "sanity";
import { VscTag } from "react-icons/vsc";

export default defineType({
  name: "blog.category",
  title: "Blog category",
  type: "document",
  icon: VscTag,
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "title",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
	  language: "language"
    },
    prepare({ title, language }) {
      return {
        title: title || "Untitled",
		subtitle: language,
      };
    },
  },
});
