import React from 'react'
import Description from '../layouts/Description';
import { Grid } from '@mui/material';
import Quotes from '../layouts/Quotes';

function AboutMe() {
  return (
    <>
  <div style={{ marginTop: '15vh', width: '100%' }}>
    <Grid
      container
      spacing={4}
      columns={12}
      justifyContent="center"
    >
      <Grid item xs={12} lg={6} sx={{ paddingLeft: 0, display: 'flex', justifyContent: 'center' }}>
        <Description />
      </Grid>
      <Grid item xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Quotes />
      </Grid>
    </Grid>
  </div>
</>
  )
}

export default AboutMe