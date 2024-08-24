import { defineField, defineType } from "sanity";
const name = "Section 50";
export default defineType({
  name: "section50",
  type: "object",
  title: name,
  preview: {
    select: {
      title: "title",
      category: "development",
      section: "section",
      image: "/assets/section/section50.png",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: name,
        media: image,
      };
    },
  },
  fieldsets: [
    {
      title: "Content",
      name: "groupTitle",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      fieldset: "groupTitle",
    }),

    defineField({
      name: "description",
      type: "text",
      fieldset: "groupTitle",
    }),

    defineField({
      name: "powertrainValues",
      title: "Powertrain",
      type: "array",
      of: [
        {
          name: "powertrainValue",
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "description",
              type: "text",
            }),
            defineField({
              name: "backgroundImage",
              type: "imageType",
            }),
            defineField({
              name: "stats",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      type: "string",
                    }),
                    defineField({
                      name: "value",
                      type: "string",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
