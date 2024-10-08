import { defineArrayMember, defineField, defineType } from "sanity";
import { VscSymbolKeyword } from "react-icons/vsc";
import imageBlock from "../../../fragments/image-block";
import { getBlockText } from "../../../../src/utils";

export default defineType({
  name: "richtext-module",
  title: "Richtext module",
  icon: VscSymbolKeyword,
  type: "object",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "options", title: "Options" },
  ],
  fields: [
    defineField({
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        imageBlock,
        defineArrayMember({
          type: "code",
          options: {
            withFilename: true,
          },
        }),
      ],
      group: "content",
    }),
    defineField({
      name: "tableOfContents",
      type: "boolean",
      initialValue: false,
      group: "options",
    }),
    defineField({
      name: "tocPosition",
      type: "string",
      options: {
        list: ["left", "right"],
        layout: "radio",
      },
      hidden: ({ parent }) => !parent.tableOfContents,
      initialValue: "right",
      group: "options",
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
      content: "content",
      category: "block",
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: "Richtext module",
    }),
  },
});
