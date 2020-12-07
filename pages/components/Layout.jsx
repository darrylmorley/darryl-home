import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Darryls' Home</title>
      </Head>
      <nav>
        <h1>Darryls' Stuff</h1>
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
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout