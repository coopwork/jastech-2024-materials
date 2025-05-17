import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple, red } from '@mui/material/colors';

const theme = createTheme({
	palette: {
	  primary: red,
	  secondary: red,
	},
  });

export default function header () {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Link to="/">Домой</Link>
             </Toolbar>
          </AppBar>
        </Box>
        </ThemeProvider>
    
      );
    }