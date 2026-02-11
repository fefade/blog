import Post from "@/components/post"
import { getAllPosts } from "@/lib/api"
import { PostType } from "@/types"
import { Constants } from "@fefade-ui/core"

export default function () {
	const allPosts = getAllPosts()

	// const heroPost = allPosts[0]

	// const morePosts = allPosts.slice(1)

	const postsByCategory: Record<string, PostType[]> = allPosts.reduce(
		(acc, post) => {
			const category = post.categories?.[0] || ""

			if (!acc[category]) acc[category] = []
			acc[category].push(post)

			return acc
		},
		{} as Record<string, PostType[]>
	)

	return (
		<div>
			{Object.entries(postsByCategory).map(([category, posts]) => (
				<div
					key={category}
					style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
				>
					{category !== "" && (
						<div style={{ position: "relative" }}>
							<h1
								style={{
									borderBottom: `1px solid ${Constants.themeColorVar.primary}`
								}}
							>
								{category}
							</h1>
							<div
								style={{
									width: "30px",
									height: "5px",
									background: Constants.themeColorVar.primary
								}}
							></div>
						</div>
					)}

					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
							gap: "2rem",
							justifyItems: "center"
						}}
					>
						{posts.map((post) => (
							<Post key={post.slug} data={post} />
						))}
					</div>
					<br />
				</div>
			))}
		</div>
	)
}
