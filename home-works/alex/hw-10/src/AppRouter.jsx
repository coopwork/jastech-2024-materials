import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostId from "./pages/PostId.jsx";
import Header1 from "./components/Header1.jsx";




const AppRouter = () => {
	return (
			<>
				<Header1/>
				{/* <header className='header'>
					<nav>
						<Link to="/">Home</Link>
					</nav>
				</header> */}

				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/posts/:postId' element={<PostId/>}/>
				</Routes>
			</>
	);
};

export default AppRouter;