import { defineField, defineType } from 'sanity'
const name = 'CTA 25'
export default defineType({
  name: 'cta25',
  type: 'object',
  title: name,
  preview: {
    select: {
      title: 'title',
      category: 'marketing',
      section: 'cta',
      image:
        'https://www.relume.io/__assets/61789b489343c8242282a0ae/618f3e36417aa6e561766cab_618502cdd81cfd594bb50bee_section-cta25-p-2000.png',
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
