import { Metadata } from 'next'

import RotationSection from '@components/ui/rotation/RotationSection'

export const metadata: Metadata = {
  title: '리그오브레전드 아이템 목록',
  description: '리그오브레전드에서 사용할 수 있는 다양한 아이템 목록'
}

const RotationPage = () => {
  return (
    <main className="bg-white dark:bg-slate-800">
      <RotationSection />
    </main>
  )
}

export default RotationPage
