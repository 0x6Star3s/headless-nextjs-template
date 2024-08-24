import { defineField, defineType } from "sanity";
import { VscServerProcess } from "react-icons/vsc";

export default defineType({
  name: "site",
  title: "Site",
  type: "document",
  icon: VscServerProcess,
  groups: [
    { name: "general", title: "General", default: true },
    { name: "navigation", title: "Navigation" },
  ],
  fields: [
    defineField({
      name: "language",
      type: "string",
	  group: "general",
      readOnly: true,
    }),
    defineField({
    	name: 'logo',
    	type: 'logo',
    	options: {
    		collapsable: true,
    		collapsed: true,
    	},
    	group: 'general',
    }),
    defineField({
      name: "ctas",
      title: "Call-to-action",
      type: "array",
      of: [{ type: "cta" }],
      group: "general",
    }),
    defineField({
      name: "copyright",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
        },
      ],
      group: "general",
    }),
    defineField({
      name: "headerMenu",
      type: "reference",
      to: [{ type: "navigation" }],
      group: "navigation",
    }),
    defineField({
      name: "footerMenu",
      type: "reference",
      to: [{ type: "navigation" }],
      group: "navigation",
    }),
    defineField({
      name: "social",
      type: "reference",
      to: [{ type: "navigation" }],
      group: "navigation",
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Site",
    }),
  },
});
