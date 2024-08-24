import { defineField, defineType } from 'sanity'
const name = 'Header 36'
export default defineType({
  name: 'header36',
  type: 'object',
  title: name,
  preview: {
    select: {
      title: 'title',
      category: 'marketing',
      section: 'hero header',
      image:
        'https://www.relume.io/__assets/61789b489343c8242282a0ae/618f3e8946d7451bd9480047_6185058434224db1ae89cc27_section-header36.png',
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
