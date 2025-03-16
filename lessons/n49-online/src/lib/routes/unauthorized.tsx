import SignIn from "@/pages/sign-in.tsx";
import SignUp from "@/pages/sign-up.tsx";

export const UNAUTHORIZED = [
	{
		path: '*',
		element: <SignIn/>,
	},
	{
		path: '/sign-in',
		element: <SignIn/>,
	},
	{
		path: '/sign-up',
		element: <SignUp/>,
	}
] as const;