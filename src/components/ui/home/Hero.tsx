import Image from 'next/image'

import NextArrow from '@components/icons/NextArrow'

import sectionLogo from '/public/images/svg/sectionLogo.svg'

const Hero = () => {
  return (
    <section>
      <div className="relative max-w-7xl max-h-[600px] m-auto">
        <Image
          src={sectionLogo}
          alt="section Logo"
          priority={true}
          className="max-w-[1280px] max-h-[600px] w-full h-full"
        />
        <div className="absolute bottom-[5%] right-[50%] transform translate-x-2/4">
          <div className="text-center text-white font-bold">
            <p className="hidden md:block mb-3 text-blue-300 dark:text-yellow-300">
              리그 오브 레전드에서 당신의 실력을 증명하세요.
            </p>
            <a
              href="https://www.leagueoflegends.com/ko-kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-max flex items-center m-auto border-none outline-none bg-blue-300 dark:bg-yellow-300 text-[11px] text-black p-2 rounded-2xl transition-all md:p-3 md:text-[14px]"
            >
              무료로 플레이하기
              <NextArrow className="w-[15px] h-[15px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
