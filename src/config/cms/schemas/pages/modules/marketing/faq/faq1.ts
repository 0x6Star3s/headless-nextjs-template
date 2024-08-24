import { defineField, defineType } from 'sanity'


export default defineType({
  name: 'faq1',
  type: 'object',
  title: 'FAQ 1',
  preview: {
    select: {
      title: 'title',
      category: 'marketing',
      section: 'faq',
      image:
        'https://www.relume.io/__assets/61789b489343c8242282a0ae/618f3e4656a24d33f41d2122_618502dfd81cfd6379b50c15_section-faq1-p-2000.png',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Questions',
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
