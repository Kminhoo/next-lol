'use client'

import { useCallback, useEffect, useState } from 'react'

import { useParams, useRouter } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import Menu from '@components/icons/Menu'
import Close from '@components/icons/Close'
import Moon from '@components/icons/Moon'
import Sun from '@components/icons/Sun'

import { NAV_LINKS } from '@data/home/data'

import Logo from '/public/images/lol.webp'

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const pathName = useParams()

  const router = useRouter()

  const openMenu = useCallback(() => {
    setDisplayMenu(true)
  }, [])

  const closeMenu = useCallback(() => {
    setDisplayMenu(false)
  }, [])

  const moveHome = () => {
    router.push('/')
  }

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  useEffect(() => {
    closeMenu()
  }, [pathName, closeMenu])

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  return (
    <header className="shadow-md bg-white dark:bg-slate-800 transition-all">
      <div className="max-w-7xl m-auto p-2 flex items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer" onClick={moveHome}>
          <Image src={Logo} alt="main logo" className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
          <h2 className="text-sm text-slate-900 dark:text-white md:text-lg">League of Legends</h2>
        </div>

        <div className="flex items-center gap-3">
          <div>
            {darkMode ? (
              <Sun onClick={toggleTheme} className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
            ) : (
              <Moon onClick={toggleTheme} className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
            )}
          </div>
          <Menu className="w-[30px] h-[30px] cursor-pointer fill-black dark:fill-white md:hidden" onClick={openMenu} />
          <nav
            className={`bg-white dark:bg-slate-800 absolute right-0 left-0 ${
              displayMenu ? 'top-0' : 'top-[-300px]'
            }  flex flex-col gap-3  p-2 z-50 text-slate-900 dark:text-white md:relative md:bg-inherit md:top-auto md:flex-row`}
          >
            {displayMenu && (
              <div className="flex items-center justify-end">
                <Close className="w-[20px] h-[20px] cursor-pointer fill-black dark:fill-white" onClick={closeMenu} />
              </div>
            )}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="border p-2 rounded-md text-center md:border-none hover:text-blue-300 dark:hover:text-yellow-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
