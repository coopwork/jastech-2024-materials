import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostId from "./pages/PostId.jsx";
import { Container} from '@mui/system';
import { AppBar, Toolbar, Typography, Button, BottomNavigationAction, BottomNavigation } from '@mui/material';
import './index.css'

const AppRouter = () => {
	return (
			<>

<AppBar 
      position="sticky"
      sx={{
        marginBottom: "2rem",
		background: "gray",
		background: "linear-gradient(135deg, #EFEEEF, #E4E3E4)",
		boxshadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    backdropfilter: "blur(15px)"

      }}
    >
      <Toolbar>
        <Container maxWidth="xl">
          <nav>
            <Typography variant="h6">
			<Button 
                  component={Link} to="/" 
				  variant="outlined"  
                  
                >
                  Home
                </Button>
            </Typography>
          </nav>
        </Container>
      </Toolbar>
    </AppBar>



				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/posts/:postId' element={<PostId/>}/>
				</Routes>
        <BottomNavigation showLabels sx={{
          background: "gray",
          background: "linear-gradient(135deg, #EFEEEF, #E4E3E4)",
          borderTop: "solid gray 1px"
          }} 
        >
          <BottomNavigationAction label="&copy; DamZh87 2025"  />
        </BottomNavigation>
			</>
	);
};

export default AppRouter;