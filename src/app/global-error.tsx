'use client'

import { useRouter } from 'next/navigation'

import { startTransition, useEffect } from 'react'

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  const { refresh } = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="bg-white dark:bg-slate-800">
      <section className="w-full min-h-[calc(100vh-90px)] md:min-h[calc(100vh-100px)] flex items-center justify-center">
        <div className="border rounded-lg p-5 text-center text-slate-900 dark:text-white">
          <h2>에러가 발생했습니다.</h2>
          <p>{error.message}</p>
          <button
            className="border p-2 rounded-md mt-2 cursor-pointer"
            onClick={() =>
              startTransition(() => {
                refresh()
                reset()
              })
            }
          >
            다시 시도하기
          </button>
        </div>
      </section>
    </main>
  )
}

export default Error
