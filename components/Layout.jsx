import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen p-4">
      <Head>
        <title>Darryls' Home</title>
        <meta property="og:title" content="Darryls' Home" key="title" />
      </Head>
      <nav className="mt-2">
        <ul>
          <li>
            <Link href="/">
              <a>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/async-hooks">
              <a>
                Giffy Async Hooks
              </a>
            </Link>
          </li>
          <li>
            <Link href="/advanced-hooks">
              <a>
                Advanced Hooks ToDo's
              </a>
            </Link>
          </li>
          <li>
            <Link href="/use-reducer">
              <a>
                useReducer - Login Example
              </a>
            </Link>
          </li>
          <li>
            <a href="https://nextjs-github-search-app.vercel.app/">NextJS Github Search API Example</a>
          </li>
        </ul>
      </nav>
      <main className="flex-grow mt-12">{children}</main>
      <footer>
        <ul>
          <li>
            Github: <a href="https://github.com/darrylmorley" target="_blank">darrylmorley</a>
          </li>
          <li>
            Email: <a href="mailto:darrylmorley.uk@gmail.com">darrylmorley.uk@gmail.com</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout