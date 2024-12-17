import { Metadata } from 'next'

import ItemList from '@components/ui/ItemList/ItemList'

export const metadata: Metadata = {
  title: '리그오브레전드 아이템 목록',
  description: '리그오브레전드에서 사용할 수 있는 다양한 아이템 목록'
}

const ItemsPage = async () => {
  return (
    <main className="bg-white dark:bg-slate-800">
      <ItemList />
    </main>
  )
}

export default ItemsPage
