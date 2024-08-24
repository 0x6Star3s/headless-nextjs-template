import { defineField, defineType } from 'sanity'
const name = 'CTA 1'
export default defineType({
  name: 'cta1',
  type: 'object',
  title: name,
  preview: {
    select: {
      title: 'title',
      category: 'marketing',
      section: 'cta',
      image:
        'https://www.relume.io/__assets/61789b489343c8242282a0ae/618f3e1623b53831bba40db6_618502a4b82096277472fc8d_section-cta1-p-2000.png',
    },
    prepare({ title, image, section }) {
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
