import { defineField, defineType } from "sanity";
const name = "ElementCtaType";
export default defineType({
  name: "elementCtaType",
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
      title: "CTA",
      name: "groupCTA",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "view",
      type: "boolean",
      description: "może być użyty to schowania elementu",
      fieldset: "groupCTA",
    }),
    defineField({
      name: "ctaDarkMode",
      type: "boolean",
      title: "Dark Mode",
      fieldset: "groupCTA",
    }),
    defineField({
      name: "primary",
      type: "object",
      fields: [
        defineField({
          name: "label",
          type: "string",
          title: "Label",
        }),
        defineField({
          name: "href",
          type: "string",
          title: "link",
        }),
      ],
      fieldset: "groupCTA",
    }) as any,
    defineField({
      name: "secondary",
      type: "object",
      description: "Optional",
      fieldset: "groupCTA",
      // fieldsets:"groupCTA",
      fields: [
        defineField({
          name: "label",
          type: "string",
          title: "Label",
          // fieldsets:"groupCTA",
        }),
        defineField({
          name: "href",
          type: "string",
          title: "link",
        }),
      ],
    }),
  ],

});
