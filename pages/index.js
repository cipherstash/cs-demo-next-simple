import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useApi from "../lib/use-api"

export default function Home() {
  const { response: users, error, isLoading } = useApi("/api/users")

  return (
    <div className={styles.container}>
      <Head>
        <title>CipherStash Next Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://cipherstash.com">CipherStash</a>
          <br/>
          Next.js Demo
        </h1>

        <p className={styles.description}>
          Check out the CipherStash <a href="https://docs.cipherstash.com" className={styles.card}>docs</a>
          &nbsp;or examples for more information.
        </p>

        <div>
          {isLoading && <p>Loading users...</p>}

          {users && (
            <>
              <table>
                <tr>
                  <td>{ users[0].name }</td>
                </tr>
              </table>
            </>
          )}

          {error && (
            <>
              <pre>
                <code>{JSON.stringify(error, null, 2)}</code>
              </pre>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
