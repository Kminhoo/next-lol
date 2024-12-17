const Community = () => {
  return (
    <section>
      <div className="max-w-7xl m-auto bg-white dark:bg-slate-800 rounded-md">
        <div className="px-2 py-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">
            글로벌 커뮤니티에 참여하세요
          </h2>
          <p className="text-sm font-bold mb-6 text-center text-slate-900 dark:text-white break-keep">
            전 세계 플레이어들과 함께 즐기는 리그 오브 레전드
          </p>
          <div className="flex flex-row items-center justify-around md:justify-center md:gap-4">
            <a
              href="https://www.youtube.com/channel/UCooLkG0FfrkPBQsSuC95L6w"
              target="_blank"
              rel="noopener noreferrer"
              className="border-none p-3 bg-red-600 rounded-md text-white text-sm"
            >
              Youtube 참여
            </a>
            <a
              href="https://www.op.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-none p-3 bg-black rounded-md text-white text-sm"
            >
              오피지지 참여
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-none p-3 bg-blue-600 rounded-md text-white text-sm"
            >
              디스코드 참여
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
