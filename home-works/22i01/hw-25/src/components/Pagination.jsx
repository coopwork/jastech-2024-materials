import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationSize() {
  return (
    <Stack spacing={2} 
    container
    direction="row" 
    justifyContent="center"
    marginY={5}
    >
      <Pagination count={10} size="large" variant='outlined'/>
    </Stack>
   
  );
}