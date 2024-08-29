import { defineField, defineType } from 'sanity'
import { GrBlockQuote } from 'react-icons/gr'
import { getBlockText } from '../../../../src/utils'

export default defineType({
	name: 'testimonial.featured',
	title: 'Testimonial (featured)',
	icon: GrBlockQuote,
	type: 'object',
	fields: [
		defineField({
			name: 'testimonial',
			title: 'Testimonial',
			// type: 'reference',
			type: 'string',
			// to: [{ type: 'testimonial' }],
		}),
	],
	preview: {
		select: {
			testimonial: 'testimonial.content',
			category: 'block',
			section: 'testimonial',
		},
		prepare: ({ testimonial }) => {
			return {
				title: getBlockText(testimonial),
				subtitle: 'Testimonial (featured)',
			}
		},
	},
})
