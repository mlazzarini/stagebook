import Image from 'next/image'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import Layout from '../components/layout'

const ImageWrapper = styled.div`
  margin: 24px;
`

const LoginHeadline = styled.div`
  margin: 24px;
`

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
`

export default function Home() {
  return (
    <Layout>
        <Image src="/logo.png" alt="Stagebook Logo" width={400} height={230} />

        <LoginHeadline>Login</LoginHeadline>

        <ButtonsContainer>
          <Button variant="outlined">Host</Button>
          <Button variant="outlined">Artist</Button>
        </ButtonsContainer>
    </Layout>
  )
}
