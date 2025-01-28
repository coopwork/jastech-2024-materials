import React from 'react';
import { Box, CircularProgress, Typography } from "@mui/material";
import './Loader.css'; // Импортируем файл стилей

const Loader = () => {
    return (
        <Box className="loader-container">
            <CircularProgress />
            <Typography className="loader-text" variant='h4'>
                Loading ...
            </Typography>
        </Box>
    );
};

export default Loader;
