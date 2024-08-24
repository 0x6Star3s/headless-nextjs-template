import { LanguageContext } from "@/context/LanguageContext";
import { UserIcon } from "@sanity/icons";
import { title } from "process";
import { defineField, defineType } from "sanity";
import { media } from "sanity-plugin-media";

export default defineType({
  name: "blog.author",
  title: "Author",
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }) as any,
  ],
  preview: {
    select: {
      title: "name",
      LanguageContext: "language",
      media: "picture",
    },
    prepare({ title, LanguageContext, media }) {
      return {
        title,
        subtitle: LanguageContext,
        media,
      };
    },
  },
});
