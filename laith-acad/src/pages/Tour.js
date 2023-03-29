import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ImageCollage from '../components/ImageCollage'

function Tour() {
  return (
    <Container sx={{width: 900}}>
      <Typography variant='h3' component="h1" marginTop={3}>
      Immerse into the Falls
      </Typography>
      <Box>
        <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" height={325} alt="" />
        <ImageCollage/>
      </Box>
    </Container>
  )
}

export default Tour