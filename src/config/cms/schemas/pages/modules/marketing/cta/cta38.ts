import { defineField, defineType } from 'sanity'
const name = 'CTA 38'
export default defineType({
  name: 'cta38',
  type: 'object',
  title: name,
  preview: {
    select: {
      title: 'title',
      category: 'marketing',
      section: 'cta',
      image:
        'https://www.relume.io/__assets/61789b489343c8242282a0ae/6316fa2ad45e6746dc4ee22a_629848705d711bb23ec8195c_image-cta38.png',
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
