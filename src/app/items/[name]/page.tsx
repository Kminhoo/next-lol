import { Metadata } from 'next'

import ItemInfoCard from '@components/ui/itemDetail/ItemInfoCard'

import removeHtmlTags from '@utils/removeHtmlTags'
import { getItemData } from '@utils/getItemData'

export type ItemDetailPageProps = {
  params: {
    name: string
  }
}

export const generateMetadata = async ({ params }: ItemDetailPageProps): Promise<Metadata> => {
  const item = await getItemData(params.name)

  if (!item) {
    return {
      title: 'Item Not Found',
      description: '해당 아이템을 찾을 수 없습니다.'
    }
  }

  return {
    title: item.name,
    description: removeHtmlTags(item.plaintext) || '해당 아이템의 설명을 찾을 수 없습니다.'
  }
}

const ItemDetailPage = async ({ params }: ItemDetailPageProps) => {
  return (
    <main className="bg-white dark:bg-slate-800">
      <ItemInfoCard params={params} />
    </main>
  )
}

export default ItemDetailPage
