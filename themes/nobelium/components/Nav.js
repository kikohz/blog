import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'

const Nav = (props) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  // by kikohz 删除标题上面的重复文章标题
  // const title = props?.title || BLOG.TITLE
  const title = BLOG.TITLE
  const fullWidth = props.fullWidth
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.TITLE}>
              <div className="h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    className="fill-current text-black dark:text-white"
                  />
                  <rect width="24" height="24" fill="url(#paint0_radial)" />
                  <defs>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(45) scale(39.598)"
                    >
                      <stop stopColor="#CFCFCF" stopOpacity="0.6" />
                      <stop offset="1" stopColor="#E9E9E9" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </a>
          </Link>
          {title
            ? (
            <p className="ml-2 font-medium text-slate-600 dark:text-gray-100 header-name">
              {title}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-slate-600 dark:text-gray-100 header-name">
              {BLOG.TITLE},{' '}
              <span className="font-normal">{BLOG.DESCRIPTION}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

const NavBar = (props) => {
  const { customNav } = props

  const { locale } = useGlobal()
  let links = [
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { icon: 'fas fa-search', name: locale.NAV.SEARCH, to: '/search', show: true },
    { icon: 'fas fa-archive', name: locale.NAV.ARCHIVE, to: '/archive', show: true },
    { icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: false },
    { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: true }
  ]
  if (customNav) {
    links = links.concat(customNav)
  }
  return (
      <div className="flex-shrink-0">
        <ul className="flex flex-row">
          {links.map(
            link =>
              link.show && (
                <li
                  key={link.to}
                  className="block ml-4 text-black dark:text-gray-50 nav"
                >
                  <Link href={link.to}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
  )
}

export default Nav
