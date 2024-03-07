import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const Homesection = () => {
  return (
    <>
    <Divider size={8} />
  <Grid container>
<Grid item xs={12} display="flex" alignItems="center" justifyContent="center"  sx={{backgroundColor:"black"}} p={8} pt={5} pb={5} >
    <Typography fontSize="32px" color="white" >
    “ Technology, through automation and artificial intelligence, <br/>is definitely one of the most disruptive sources."
    </Typography>
    <Typography mt={20} display={{ xs: 'none', sm: 'none', md: 'flex' }} fontSize="20px" color="#747474" justifyContent="flex-end">
        - ALAIN DEHAZE
      </Typography>
</Grid>
  </Grid>  
  </>  
  )
}

export default Homesection
