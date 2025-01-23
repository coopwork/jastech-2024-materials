import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostId from "./pages/PostId.jsx";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox'


const AppRouter = () => {
	return (
			<>
				<AppBar position="static">
					<Toolbar>
						<IconButton size="large" edge="start" color="inherit" aria-label="logo">
							<MarkunreadMailboxIcon />
						</IconButton>
						<Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
							Posts
						</Typography>
						<Stack direction='row' spacing={2}>
							<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
						</Stack>
					</Toolbar>
				</AppBar>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/posts/:postId' element={<PostId/>}/>
				</Routes>
			</>
	);
};

export default AppRouter;