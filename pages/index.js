import Image from 'next/image'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import Layout from '../components/layout'
import { useState } from 'react'
import LoginDialog from '../components/LoginDialog'

const ImageWrapper = styled.div`
  margin: 24px;
`

const Slogan = styled.div`
  margin: 24px 0;
  font-size: 30px;
  color: #ff8e3e;
`

const BlueSlogan = styled.span`
  color: #0070c0;
`

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
`

export default function Home() {
  const [open, setOpen] = useState(false)
  const [openedDialog, setOpenedDialog] = useState(undefined)

  const handleClickOpen = (dialogName) => {
    setOpen(true)
    setOpenedDialog(dialogName)
  }

  const handleClose = () => {
    setOpen(false)
    setOpenedDialog(undefined)
  }

  return (
    <Layout>
        <Image src="/logo.png" alt="Stagebook Logo" width={400} height={230} />
        <Slogan>burn the stage. <BlueSlogan>rock the house.</BlueSlogan></Slogan>
        <ButtonsContainer>
          <Button variant="outlined" onClick={() => handleClickOpen('host')}>Login Host</Button>
          <Button variant="outlined" onClick={() => handleClickOpen('artist')}>Login Artist</Button>
        </ButtonsContainer>
        <LoginDialog open={open} openedDialog={openedDialog} onClose={handleClose} />
    </Layout>
  )
}
