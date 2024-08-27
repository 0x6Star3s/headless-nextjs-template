import { stegaClean } from '@sanity/client/stega'

export function uid({ uid = undefined, _key }: Sanity.Module) {
	return stegaClean(uid) || _key
}
