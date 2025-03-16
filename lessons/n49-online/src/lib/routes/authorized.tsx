import Home from "@/pages/home.tsx";
import Profile from "@/pages/profile.tsx";
import Posts from "@/pages/posts.tsx";

export const AUTHORIZED = [
	{
		path: '*',
		element: <Home/>
	},
	{
		path: '/',
		element: <Home/>
	},
	{
		path: '/posts',
		element: <Posts/>
	},
	{
		path: '/profile',
		element: <Profile/>
	},
] as const;