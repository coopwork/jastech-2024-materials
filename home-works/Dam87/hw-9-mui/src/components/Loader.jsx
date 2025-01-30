import React from 'react';
import {Box, CircularProgress, Typography} from "@mui/material";

const Loader = () => {
	return (
			<Box sx={
				{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh'
				}
			}>
				<CircularProgress/>

				<Typography variant='h4'>
					Loading ...
				</Typography>
			</Box>
	);
};

export default Loader;