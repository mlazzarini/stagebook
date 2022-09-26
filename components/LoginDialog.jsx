import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import { DialogContent } from '@mui/material'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import Router from 'next/router'

const StyledDialogContent = styled(DialogContent)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export default function LoginDialog({ onClose, open, openedDialog }) {
  const handleClose = () => {
    onClose()
  }

  const onSubmit = () => Router.push(`/${openedDialog}`)

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Inserisci le tue credenziali</DialogTitle>
      <StyledDialogContent>
        <TextField id='email' label='E-mail' variant='standard' />
        <TextField id='password' label='Password' variant='standard' />
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={onSubmit}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
