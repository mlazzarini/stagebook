import styled from 'styled-components'
import Head from 'next/head'

const Container = styled.div`
  padding: 0 2rem;
`

const MainContent = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  `

export default function Layout({ children }) {
  return (
    <Container>
        <Head>
            <title>Stagebook</title>
            <meta name="description" content="Stagebook description" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <MainContent>
            {children}
        </MainContent>

        <Footer>
            Protetto da copyright
        </Footer>
    </Container>
  )
}