import { stegaClean } from '@sanity/client/stega'

export function cleanUid({ uid = undefined, _key }: Sanity.Module) {
	return stegaClean(uid) || _key
}
