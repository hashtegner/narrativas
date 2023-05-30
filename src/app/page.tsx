import Link from "next/link";
import { allPosts } from "contentlayer/generated";

import Bio from "@/components/bio";
import SiteHeader from "@/components/site-header";
import PostDate from "@/components/post-date";
import SubscribeForm from "@/components/subscribe-form";


export default async function HomePage() {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <SiteHeader isIndex>
        <Bio />
      </SiteHeader>
      <hr />

      <section>
        <SubscribeForm />
      </section>

      <section>
        {posts.map((post) => (
          <article key={post._raw.flattenedPath} className="box mb-6 has-text-centered">
            <h2 className="subtitle is-size-4 has-text-weight-bold">
              <Link href={post.url} className="has-text-black">{post.title}</Link>
            </h2>

            <PostDate {...post} />

            <p className="has-text-justified mt-2 mb-4">{post.preview}</p>
            <Link href={post.url} className="button is-rounded is-small">Ler história</Link>
          </article>
        ))}
      </section>
    </>
  )
}
