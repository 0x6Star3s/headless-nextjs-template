import { defineField, defineType } from "sanity";
import { GrBlockQuote } from "react-icons/gr";
import { count, getBlockText } from "../../../../structure/utils";

export default defineType({
  name: "testimonial-list",
  title: "Testimonial list",
  icon: GrBlockQuote,
  type: "object",
  fields: [
    defineField({
      name: "intro",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "string",
      // type: "array",
      // of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
  ],
  preview: {
    select: {
      intro: "intro",
      testimonials: "testimonials",
      category: "block",
      section: "testimonial",
    },
    prepare: ({ intro, testimonials }) => ({
      title: getBlockText(intro) || count(testimonials, "testimonial"),
      subtitle: "Testimonial list",
    }),
  },
});
