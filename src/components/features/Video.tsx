'use client'

import { useRef } from 'react'

type VideoTypes = 'canyon' | 'random' | 'strategy'

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const currentVideoRef = useRef<VideoTypes>('canyon')

  const changeVideo = (video: VideoTypes) => {
    if (!videoRef.current) {
      return
    }

    if (currentVideoRef.current === video) {
      return
    }

    currentVideoRef.current = video
    videoRef.current.src = `/media/${video}.webm`
  }

  return (
    <div className="p-2 md:flex md:flex-row md:items-center">
      <div className="md:flex-1 md:flex md:flex-col md:items-center">
        <h2 className="text-xl font-bold mb-6 text-center text-slate-900 dark:text-white">다양한 게임모드</h2>
        <div className="flex flex-col items-center w-full gap-3 md:max-w-[300px]">
          <button
            className="w-full border rounded-md p-3 text-slate-900 hover:text-blue-300 dark:text-white"
            onClick={() => changeVideo('canyon')}
          >
            소환사의 협곡
          </button>
          <button
            className="w-full border rounded-md p-3 text-slate-900 hover:text-blue-300 dark:text-white"
            onClick={() => changeVideo('random')}
          >
            칼바람의 나락
          </button>
          <button
            className="w-full border rounded-md p-3 text-slate-900 hover:text-blue-300 dark:text-white"
            onClick={() => changeVideo('strategy')}
          >
            롤토체스
          </button>
        </div>
      </div>
      <div className="w-full min-h-[530px]  md:flex-1 md:p-2 flex items-center justify-center">
        <video ref={videoRef} autoPlay muted loop className="max-w-[500px] w-full rounded-[50%]">
          <source src={`/media/${currentVideoRef.current}.webm`} type="video/webm" />
          <source src={`/media/${currentVideoRef.current}.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Video
