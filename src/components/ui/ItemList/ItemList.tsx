import ChampionWidthItemCard from '@components/common/ChampionWidthItemCard'

import { Item } from '@tsc/items'

import { fetchItemList } from '@utils/serverApi'

const ItemList = async () => {
  const response = await fetchItemList()
  const items: Item[] = Object.values(response)

  return (
    <section>
      <div className="max-w-7xl m-auto py-[50px]">
        <h1 className="text-xl font-bold mb-6 text-center text-slate-900 dark:text-white">아이템 목록</h1>
        <div className="grid grid-cols-2 gap-4 p-2 m-auto md:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => (
            <ChampionWidthItemCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ItemList
