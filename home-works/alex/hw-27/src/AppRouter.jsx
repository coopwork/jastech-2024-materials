import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostId from "./pages/PostId.jsx";
import { Button } from 'antd';

const AppRouter = () => {
	return (
			<>
				<header className='header'>
					<nav>
						<Button
						type="primary" 		
						danger ghost																
						variant='contained'
						>
							
							<Link to="/">Home</Link>
						</Button>
						
					</nav>
				</header>
				<div className="container"
				 style={{ paddingLeft: 50, paddingRight: 50}}>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/posts/:postId' element={<PostId/>}/>
				</Routes>
				</div>
				
			</>
	);
};

export default AppRouter;