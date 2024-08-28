import { PortableText } from 'next-sanity'
import CTAList from '@/components/ui/CTAList'

export default function Callout({
	content,
	ctas,
}: Partial<{
	content: any
	ctas: Sanity.CTA[]
}>) {
	return (
		<section className="section">
			<div className="section grid items-center gap-12 gap-y-6 rounded bg-accent/5 md:grid-cols-[2fr,1fr] px-5">
				<div className="richtext">
					<PortableText value={content} />
				</div>
				<CTAList ctas={ctas} />
			</div>
		</section>
	)
}
