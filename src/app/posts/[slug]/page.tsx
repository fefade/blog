import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import DateFormatter from "@/components/date-formatter";
import Image from "next/image";
import Avatar from "@/components/avatar";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <article style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          /> */}
      <h1 style={{ fontSize: "5.25rem" }}>{post.title}</h1>
      <Avatar name={post.author.name} picture={post.author.picture} />
        <Image
          alt={post.title}
          src={post.coverImage}
          width={600}
          height={340}
          style={{
            width: "100%",
            borderRadius: "0.5rem",
            objectFit: "cover",
          }}
        />
      <DateFormatter dateString={post.date} />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
