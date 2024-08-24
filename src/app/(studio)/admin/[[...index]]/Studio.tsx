'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/config/sanity.config'

export function Studio() {
	return <NextStudio config={config} />
}
