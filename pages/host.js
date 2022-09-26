import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Container = styled.div``

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Stagebook</title>
        <meta name="description" content="Stagebook description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Host</h1>

      <footer className={styles.footer}>
        Protetto da copyright
      </footer>
    </Container>
  )
}
