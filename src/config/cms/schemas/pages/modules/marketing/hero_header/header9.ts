import { defineField, defineType } from 'sanity'
const name = 'Header 9'
export default defineType({
  name: 'header9',
  type: 'object',
  title: name,
  preview: {
    select: {
      title: 'title',
      category: 'marketing',
      section: 'hero header',
      image:
        'https://www.relume.io/__assets/61789b489343c8242282a0ae/618f3e6695f5f561136a89d7_618505581149ad653877bce7_section-header9.png',
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
