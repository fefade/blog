import type { PostType } from "@/types"
import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

const postsDirectory = join(process.cwd(), "_posts")

export function getPostBySlug(slug: string): PostType {
	const realSlug = slug.replace(/\.md$/, "")
	const fullPath = join(process.cwd(), "_posts", `${realSlug}.md`)
	const fileContents = fs.readFileSync(fullPath, "utf8")
	const { data, content } = matter(fileContents)

	return {
		...data,
		slug: realSlug,
		categories: data.categories ?? [],
		content
	} as PostType
}

export function getAllPosts(): PostType[] {
	function getPostSlugs() {
		return fs.readdirSync(postsDirectory)
	}
	return getPostSlugs()
		.map((slug) => getPostBySlug(slug))
		.sort((a, b) => (a.date > b.date ? -1 : 1))
}
