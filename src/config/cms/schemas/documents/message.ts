import { defineField, defineType } from "sanity";

export default defineType({
  name: "message",
  title: "Messages",
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
    }),
    defineField({
      type: "string",
      name: "email",
      title: "Email",
    }),
    defineField({
      type: "text",
      name: "subject",
      title: "Subject",
    }),
    defineField({
      type: "array",
      name: "fields",
      title: "Fields",
      of: [
        {
          type: "object",
          name: "field",
          title: "Field",
          fields: [
            {
              type: "string",
              name: "name",
              title: "Name",
            },
            {
              type: "string",
              name: "value",
              title: "Value",
            },
          ],
        },
      ],
    }),
  ],
});
