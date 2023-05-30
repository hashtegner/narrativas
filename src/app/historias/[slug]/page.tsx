import { Post, allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import PostDate from '@/components/post-date';
import SiteHeader from '@/components/site-header';
import SubscribeForm from '@/components/subscribe-form';
import Bio from '@/components/bio';


export function findPostBySlug(slug: string): Post {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return post
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const post = findPostBySlug(params.slug);

  const defaultMeta = {
    title: `${post.title} - Narrativas`,
    description: post.preview,
  }

  return {
    ...defaultMeta,
    openGraph: {
      ...defaultMeta,
    }
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = findPostBySlug(params.slug);
  const Content = getMDXComponent(post.body.code);

  return (
    <>
      <SiteHeader />

      <section className='mt-4'>
        <article>
          <header className="has-text-centered mb-6">
            <h1 className='title has-text-weight-bold'>{post.title}</h1>
            <PostDate {...post} />
            <p className="is-6 has-text-grey">{post.authors}</p>
          </header>

          <div className="content mb-6">
            <Content components={{ Image }} />
          </div>
        </article>

      </section>

      <hr />
      <footer>

        <h3 className="has-text-centered is-letter-spaced is-uppercase">Sobre este Blog</h3>
        <Bio />
        <hr />
        <SubscribeForm />

      </footer>
    </>
  )
}


export const generateStaticParams = async () => allPosts.map((post) => ({ params: { slug: post._raw.flattenedPath } }));
