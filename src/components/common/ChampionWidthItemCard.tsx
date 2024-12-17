import Link from 'next/link'
import Image from 'next/image'

import { Champion } from '@tsc/champions'
import { Item } from '@tsc/items'

import removeHtmlTags from '@utils/removeHtmlTags'

type ChampionWidthItemCardProps = {
  champion?: Champion
  item?: Item
}

const ChampionWidthItemCard = ({ champion, item }: ChampionWidthItemCardProps) => {
  return (
    <Link href={champion ? `/champions/${champion.id}` : `/items/${item?.name}`}>
      <div
        className={`border p-1 flex flex-col items-center rounded-md shadow-md justify-center gap-2 ${
          item && 'max-w-[250px] max-h-[300px] w-full h-full text-center md:max-h-[400px]'
        }`}
      >
        <Image
          width={50}
          height={50}
          className="md:w-[100px] md:h-[100px]"
          alt={champion ? '리그오브레전드 챔피어' : '리그오브레전드 아이템'}
          src={
            champion
              ? `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.image.full}`
              : `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item?.image.full}`
          }
        />
        <div className="text-base text-slate-900 dark:text-white font-semibold">
          {champion ? champion.name : item?.name ? removeHtmlTags(item.name) : '설명이 없습니다.'}
        </div>
        <div className="text-sm break-keep text-slate-700 dark:text-gray-500">
          {champion ? champion.title : item?.plaintext ? removeHtmlTags(item.plaintext) : '설명이 없습니다.'}
        </div>
      </div>
    </Link>
  )
}

export default ChampionWidthItemCard
