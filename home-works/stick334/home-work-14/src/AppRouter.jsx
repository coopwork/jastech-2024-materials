import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PostId from "./pages/PostId.jsx";
import Header from "./components/Header.jsx";

const AppRouter = () => {
	return (
			<>
			<Header/>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/posts/:postId' element={<PostId/>}/>
				</Routes>
						
			</>
	);
};

export default AppRouter;