import { getAllFragments } from '@/lib/fragments'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'
import FragmentsListView from '@/components/FragmentsListView'

export default async function FragmentsPage() {
  const fragments = await getAllFragments()

  return (
    <div className="article-container">
      <MetaTag {...meta.fragments} />
      <h1>Fragments</h1>
      <p>
        Fragments are quiet signals — poetic traces, dialogic sketches, and evolving syntax in motion.
      </p>

      <FragmentsListView fragments={fragments} />
    </div>
  )
}