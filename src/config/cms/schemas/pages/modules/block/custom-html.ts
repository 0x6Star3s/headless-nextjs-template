import { defineField, defineType } from "sanity";
import { VscCode } from "react-icons/vsc";

export default defineType({
  name: "custom-html",
  title: "Custom HTML",
  icon: VscCode,
  type: "object",
  groups: [{ name: "options", title: "Options" }],
  fields: [
    defineField({
      name: "html",
      title: "HTML",
      type: "code",
      options: {
        language: "html",
        languageAlternatives: [{ title: "HTML", value: "html" }],
      },
    }),
    defineField({
      name: "uid",
      title: "Unique Identifier",
      type: "uid",
      group: "options",
    }),
  ],
  preview: {
    select: {
      code: "html.code",
      category: "block",
    },
    prepare: ({ code }) => ({
      title: code,
      subtitle: "Custom HTML",
    }),
  },
});
