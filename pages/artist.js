import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import ArtistSection from '../components/ArtistSection'

const Container = styled.div``

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Stagebook</title>
        <meta name="description" content="Stagebook description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Benvenuto su Stagebook!</h1>

      <h2>I tuoi contenuti</h2>
      <ArtistSection title="Foto" />
      <ArtistSection title="Video" />
      <ArtistSection title="Bio" />
      <ArtistSection title="Cachet" />

      <footer className={styles.footer}>
        Protetto da copyright
      </footer>
    </Container>
  )
}
