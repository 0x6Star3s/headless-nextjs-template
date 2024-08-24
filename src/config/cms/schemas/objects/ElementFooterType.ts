import { defineField, defineType } from "sanity";
const name = "ElementFooterType";
export default defineType({
  name: "elementFooterType",
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
      title: "Footer",
      name: "groupFooter",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'shadow',
      description: 'Cień do elementem',
      type: 'boolean',
    }),
    defineField({
      name: "view",
      type: "boolean",
      description: "może być użyty to schowania elementu",
      fieldset: "groupFooter",
    }),
    defineField({
      name: "content",
      title: "Block Content",
      type: "array",
      of: [{ type: "block" }],
      fieldset: "groupFooter",
    }) as any,
  ],
  initialValue:{
    view: true,
  }
});
