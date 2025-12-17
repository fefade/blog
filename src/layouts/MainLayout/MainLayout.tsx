"use client"
import { Link, Provider } from "@fefade/react"
import { PropsWithChildren } from "react"
import { default as NextLink } from "next/link"

type Props = PropsWithChildren & {}

export default function ({ children }: Props) {
	return (
		<Provider>
			<Link as={NextLink} href="/" style={{ padding: "1rem 0" }}>
				<h1 style={{ fontSize: "2.25rem" }}>Blog</h1>
			</Link>
			<main style={{ marginTop: "3rem", minHeight: "100vh" }}>{children}</main>
		</Provider>
	)
}
