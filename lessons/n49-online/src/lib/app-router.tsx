import {Route, Routes} from "react-router-dom";
import {ROUTES} from "@/lib/routes";
import {useUser} from "@/hooks/use-user.tsx";


const AppRouter = () => {
	const {user} = useUser();
	return (
			<Routes>
				{ROUTES[user?.role || 'UNAUTHORIZED'].map(({path, element}) => (
						<Route key={path} path={path} element={element}/>
				))}
			</Routes>
	);
};

export default AppRouter;