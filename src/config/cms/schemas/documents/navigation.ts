import { defineField, defineType } from "sanity";
import { VscSymbolClass } from "react-icons/vsc";
import { count } from "../../structure/utils";

export default defineType({
  name: "navigation",
  title: "Navigation",
  icon: VscSymbolClass,
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "link" }, { type: "link.list" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      items: "items",
      language: "language",
    },
    prepare: ({ title, items, language }) => ({
      title,
      subtitle: `${language}, (${count(items)})`,
    }),
  },
});
