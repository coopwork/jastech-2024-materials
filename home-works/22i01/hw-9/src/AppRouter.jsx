import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Home from "./pages/Home.jsx";
import PostId from "./pages/PostId.jsx";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <AppBar position="static" color="primary" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:postId" element={<PostId />} />
          </Routes>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default AppRouter;
