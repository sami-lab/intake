import React from 'react';
import { Grid } from '@mui/material';

import Header from '../src/reusable/header';
export default function Index() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
    </Grid>
  );
}
