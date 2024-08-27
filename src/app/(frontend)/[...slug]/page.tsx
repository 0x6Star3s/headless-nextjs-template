import client from '@/lib/sanity/client'
import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { modulesQuery } from '@/lib/sanity/queries'
import { notFound } from 'next/navigation'
import Modules from '@/components/modules'
import processMetadata from '@/lib/processMetadata'

export default async function Page({ params }: Props) {
	const page = await getPage(params)
	if (!page) notFound()
	return <Modules modules={page?.modules} page={page} />
}

export async function generateMetadata({ params }: Props) {
	const page = await getPage(params)
	if (!page) notFound()
	return processMetadata(page)
}

// -------------------------------------------------------------------

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[
			_type == 'page' &&
			defined(slug.current) &&
			!(slug.current in ['index', '404'])
		].slug.current`,
	)

	return slugs.map((slug) => ({ slug: slug.split('/') }))
}

async function getPage(params: Props['params']) {
	return await fetchSanity<Sanity.Page>(
		groq`*[
			_type == 'page' &&
			slug.current == $slug &&
			!(slug.current in ['index', '404'])
		][0]{
			...,
			modules[]{ ${modulesQuery} },
			metadata {
				...,
				'ogimage': image.asset->url
			}
		}`,
		{
			params: { slug: params.slug?.join('/') },
			tags: ['pages'],
		},
	)
}

type Props = {
	params: { slug?: string[] }
}
