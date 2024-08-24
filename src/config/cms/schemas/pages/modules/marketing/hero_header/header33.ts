import { defineField, defineType } from 'sanity'
const name = 'Header 33'
export default defineType({
  name: 'header33',
  type: 'object',
  title: name,
  preview: {
    select: {
      title: 'title',
      category: 'marketing',
      section: 'hero header',
      image:
        'https://www.relume.io/__assets/61789b489343c8242282a0ae/618f3e862e8e337029446002_618505801f99a1b86b8dded8_section-header33.png',
    },
    prepare({ title, image }) {
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
