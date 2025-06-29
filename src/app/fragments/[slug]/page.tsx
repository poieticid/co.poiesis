import { notFound } from 'next/navigation'
import { getAllFragments, getFragmentBySlug } from '@/lib/fragments'
import ArticleButton from '@/components/ArticleButton'
import MDXContent from '@/components/MDXContent'

export async function generateStaticParams() {
  const fragments = getAllFragments()
  return fragments.map((fragment) => ({ slug: fragment.slug }))
}

export default async function FragmentDetail({ params }: { params: { slug: string } }) {
  const result = await getFragmentBySlug(params.slug)

  if (!result || !result.meta) notFound()

  const { meta, content } = result

  return (
    <div className="article-container">
      <h1 className="article-title">{meta.title}</h1>

      <p className="article-date">
        {new Date(meta.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>

      {meta.image?.src && (
        <figure className="article-figure">
          <img
            src={meta.image.src}
            alt={meta.image.alt ?? 'Fragment image'}
            className="article-image"
          />
          {meta.image.caption && (
            <figcaption className="article-caption">
              {meta.image.caption}
            </figcaption>
          )}
        </figure>
      )}

      <MDXContent source={content} />

      <ArticleButton />
    </div>
  )
}