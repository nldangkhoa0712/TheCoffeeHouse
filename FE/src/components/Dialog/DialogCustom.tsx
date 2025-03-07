// ** React Imports
import { forwardRef, ReactElement, Ref } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Fade, { FadeProps } from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import { DialogProps } from './type'
import { Close } from '@mui/icons-material'
import { DialogTitle, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DialogCustom = ({ open, component, title, onClose }: DialogProps) => {
  return (
    <Card>
      <Dialog
        fullWidth
        maxWidth="sm"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '10px',
          },
          '& .MuiDialog-container': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
        open={open}
        scroll="body"
        keepMounted
        onClose={onClose}
        TransitionComponent={Transition}
        onBackdropClick={onClose}
      >
        <DialogTitle>
          <Typography variant="h5" sx={{ my: 2, lineHeight: '2rem' }}>
            {title}
          </Typography>
          <IconButton
            size="small"
            onClick={onClose}
            sx={{ position: 'absolute', right: '1rem', top: '2rem' }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            px: { xs: 4, sm: 6 },
            py: { xs: 4, sm: 8.5 },
            position: 'relative',
            display: 'block',
            textAlign: 'left !important',
            // height: '50vh',
            // width: '1000px',
            // height: '500px',
          }}
        >
          <Box>{component}</Box>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default DialogCustom
