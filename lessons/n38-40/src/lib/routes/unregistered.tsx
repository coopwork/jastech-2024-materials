import Home from "@/pages/home.tsx";
import {PATHS} from "@/utils/constants/paths.ts";
import Error from "@/pages/error.tsx";
import AboutUs from "@/pages/about-us.tsx";

export const UNREGISTERED_ROUTES = [
	{
		path: '*',
		page: <Error/>,
	},
	{
		path: PATHS.HOME,
		page: <Home/>,
	},
	{
		path: PATHS.ABOUT_US,
		page: <AboutUs/>
	}
] as const;