import { defineField, defineType } from 'sanity'
const name = 'Header 5'
export default defineType({
  name: 'header5',
  type: 'object',
  title: name,
  preview: {
    select: {
      title: 'title',
      category: 'marketing',
      section: 'hero header',
      image:
        'https://www.relume.io/__assets/61789b489343c8242282a0ae/618f3e61b69b25832071def0_61850551501bf448fcb1c2f3_section-header5.png',
    },
    prepare({ title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: name,
        media: image,
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})
