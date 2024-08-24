import { defineField, defineType } from "sanity";

export default defineType({
  name: "metadata",
  title: "Metadata",
  type: "object",
  fields: [
    defineField({
      name: "noIndex",
      description: "Prevent search engines from indexing this page.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "title",
      title: "Title fro SEO & social sharing",
      type: "string",
      description:
        "You optimize your website to attract more customers through social media and Google search. You want your posts to be attractive and encourage users to click. It is best if the description is between 15 and 60 characters long.",
      validation: (Rule) => Rule.max(60).warning(),
      options: {
        max: 60,
      } as any,
    }),
    defineField({
      name: "description",
      title: "Description for SEO & social sharing",
      description:
        "The description of a website that appears in Google search results. The description should contain between 50 and 160 characters.",
      type: "text",
      options: {
        max: 160,
      } as any,
      validation: (Rule) => Rule.max(160).warning(),
    }),
    defineField({
      name: "image",
      title: "Image for SEO & social sharing",
      description:
        "The photo that will be displayed when your post is shared on Facebook or Twitter.",
      type: "image",
    }),
  ],
});
