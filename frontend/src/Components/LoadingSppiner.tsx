import { Box, CircularProgress } from '@mui/material'


function LoadingSppiner() {
  return (
    <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress/></Box>
  )
}

export default LoadingSppiner