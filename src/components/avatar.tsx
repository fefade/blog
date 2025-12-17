"use client"
import { Avatar } from "@fefade/react"

type Props = {
	name: string
	picture: string
}

export default function ({ name, picture }: Props) {
	return (
		<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
			<Avatar src={picture} alt={name} textFallback={name} />
			<strong>{name}</strong>
		</div>
	)
}
