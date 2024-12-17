import { fetchItemList } from '@utils/serverApi'

import { Item } from '@tsc/items'

export const getItemData = async (name: string) => {
  const decodeName = decodeURIComponent(name)

  const response = await fetchItemList()
  const items: Item[] = Object.values(response)
  const item: Item | undefined = items.find((i) => i.name === decodeName)

  return item
}
