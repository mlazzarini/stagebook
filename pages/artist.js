import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Container = styled.div``
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const ImageWrapper = styled.div`border: 1px solid black;`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Stagebook</title>
        <meta name="description" content="Stagebook description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Artist</h1>

      <footer className={styles.footer}>
        Protetto da copyright
      </footer>
    </Container>
  )
}
