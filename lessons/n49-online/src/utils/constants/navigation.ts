const UNAUTHORIZED = [
	{
		path: '/sign-in',
		label: 'Sign in'
	},
	{
		path: '/sign-up',
		label: 'Sign up'
	},
] as const;
const AUTHORIZED = [
	{
		path: '/',
		label: 'Home'
	},
	{
		path: '/posts',
		label: 'Posts'
	},
] as const;


export const NAVIGATION = {
	UNAUTHORIZED,
	AUTHORIZED,
} as const;