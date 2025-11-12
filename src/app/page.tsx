import { getAllPosts } from "@/lib/api";
import Image from "next/image"
import { default as NextLink } from "next/link";

export default function () {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", justifyItems: "center" }}>
      {allPosts.map((post, index) => (
        <NextLink
          key={index}
          href={`/posts/${post.slug}`}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "100%",
            gap: "0.5rem"
          }}
        >
          <Image
            alt={post.title}
            src={post.coverImage}
            width={600}
            height={340}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "0.5rem",
              objectFit: "cover",
            }}
          />

          <h2 style={{ margin: 0 }}>
            {post.title}
          </h2>

          <p className="muted">
            {post.excerpt}
          </p>
        </NextLink>
      ))}
    </div>
  );
}
