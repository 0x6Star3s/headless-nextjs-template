import { defineArrayMember, defineField, defineType } from "sanity";
import { VscEdit } from "react-icons/vsc";
import imageBlock from "../fragments/image-block";
import InputSlug from "../../components/seo/InputSlug";
import { slugGeneration } from "../../lib/slug";

export default defineType({
  name: "blog.post",
  title: "Blog post",
  icon: VscEdit,
  type: "document",
  groups: [
    { name: "content", default: true },
    { name: "seo", title: "SEO" },
  ],
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
      group: "content",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      components: {
        input: InputSlug,
      },
      options: {
        maxLength: 96,
        source: (doc: any) => `${doc.language}/blog/${doc.title}`,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
        slugify: (input) => slugGeneration(input),
      },
      validation: (rule) => rule.required(),
      group: "seo",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        { type: "block" },
        imageBlock,
		// {type: "array",}
        defineArrayMember({
        	type: 'code',
        	options: {
        		withFilename: true,
        	},
        }),
      ],
      group: "content",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blog.category" }],
        },
      ],
      group: "content",
    }),
    defineField({
      name: "authors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "blog.author" }],
        },
      ],
      group: "content",
    }),
    defineField({
      name: "publishDate",
      type: "date",
    //   validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
      group: "content",
    }),
    defineField({
      name: "metadata",
      type: "metadata",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishDate",
      media: "metadata.image",
    },
  },
  orderings: [
    {
      title: "Date",
      name: "date",
      by: [{ field: "publishDate", direction: "desc" }],
    },
    {
      title: "Title",
      name: "metadata.title",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
