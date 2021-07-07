import React, { FC } from 'react'
import { Link } from 'gatsby'
// @ts-expect-error
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { rhythm, scale } from '../utils/typography'
// @ts-expect-error
import Toggle from '../components/toggle'
import sun from '../images/sun.png'
import moon from '../images/moon.png'
import Footer from './footer'
interface IheaderProps {
  title: string
}
const RootHeader: FC<IheaderProps> = ({ title }) => {
  return (
    <h1
      style={{
        ...scale(1.2),
        marginBottom: rhythm(1.5),
        marginTop: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
      <ThemeToggler>
        {({ theme, toggleTheme }: any) => (
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
            }}
            checked={theme === 'dark'}
            onChange={(e: any) =>
              toggleTheme(e.target.checked ? 'dark' : 'light')
            }
          />
        )}
      </ThemeToggler>
    </h1>
  )
}
const ArticleHeader: React.FC<IheaderProps> = ({ title }) => {
  return (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h3>
  )
}
const Layout: React.FC<{ location: Location; title: string }> = ({
  location,
  title,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const Header = location.pathname === rootPath ? RootHeader : ArticleHeader
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{<Header title={title}></Header>}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
