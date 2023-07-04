import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export default function Loader() {


  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: 10000 }}
      open={true}
    >
      <CircularProgress />
    </Backdrop>
  );
}