import { type AuthorType } from "./author.types"

export type PostType = {
	slug: string
	title: string
	date: string
	coverImage: string
	author: AuthorType
	excerpt: string
	ogImage: {
		url: string
	}
	content: string
	preview?: boolean
	categories: string[]
}
