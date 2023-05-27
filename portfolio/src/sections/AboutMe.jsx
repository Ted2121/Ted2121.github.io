import React from 'react'
import Description from '../layouts/Description';
import { Grid } from '@mui/material';
import Quotes from '../layouts/Quotes';

function AboutMe() {
  return (
    <>
      <div style={{ marginTop: '20vh', width: '100%' }}>
        <Grid
          container
          spacing={5}
          columns={12}
        >
          <Grid item xs={6}>
            <Description />
          </Grid>
          <Grid item xs={6}>
            <Quotes />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default AboutMe