import Image from 'next/image'

import removeHtmlTags from '@utils/removeHtmlTags'
import { getItemData } from '@utils/getItemData'

import { Item } from '@tsc/items'

import { ItemDetailPageProps } from '@app/items/[name]/page'

const ItemInfoCard = async ({ params }: ItemDetailPageProps) => {
  const item: Item | undefined = await getItemData(params.name)

  if (!item) {
    return <div>해당 아이템의 데이터를 불러오지 못했습니다.</div>
  }

  return (
    <section>
      <div className="box-border min-h-[calc(100vh-90px)] h-ful px-2 py-[50px] flex items-center justify-center max-w-7xl m-auto md:max-w-4xl md:min-h[calc(100vh-140px)]">
        <div className="w-full flex items-center flex-col gap-5 md:gap-3">
          <h1 className="text-slate-900 dark:text-white text-2xl font-semibold md:text-4xl">{item.name}</h1>
          <p className="text-gray-500 text-lg md:text-2xl">{item.name}</p>
          <Image
            width={50}
            height={50}
            className="w-[200px] h-[200px] block mx-auto"
            alt={`${item.name}`}
            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item?.image.full}`}
          />
          <p className="text-gray-500 text-center text-sm break-keep md:text-base">
            {item.description ? removeHtmlTags(item.description) : '해당 아이템에 대한 설명이 없습니다.'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ItemInfoCard
