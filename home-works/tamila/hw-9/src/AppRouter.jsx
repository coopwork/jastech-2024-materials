import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PostId from './pages/PostId.jsx';
import { Button } from 'antd'; 

const AppRouter = () => {
	return (
		<>
			<header className='header'>
				<nav>
					<Link to="/">
						<Button type="primary">Home</Button>
					</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/posts/:postId' element={<PostId />} />
			</Routes>
		</>
	);
};

export default AppRouter;
