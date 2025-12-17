"use client"
import { PostType } from "@/types"
import { Card } from "@fefade/react"
import Image from "next/image"
import { default as NextLink } from "next/link"

type Props = {
	data: PostType
}

export default function ({ data }: Props) {
	return (
		<NextLink
			href={`/${data.slug}`}
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				gap: "0.5rem",
				textDecoration: "none",
				color: "inherit"
			}}
		>
			<Card variant="contained">
				<div
					style={{
						position: "relative",
						width: "100%",
						height: "340px",
						borderRadius: "0.5rem",
						overflow: "hidden"
					}}
				>
					<Image
						alt={data.title}
						src={data.coverImage}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						style={{
							objectFit: "cover"
						}}
						priority
					/>
				</div>
				<h2 style={{ margin: "10px 0" }}>{data.title}</h2>
				<p className="muted">{data.excerpt}</p>
			</Card>
		</NextLink>
	)
}
