import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {authAPI} from "@/utils/api/instance.ts";
import {useUser} from "@/hooks/use-user.tsx";


const SignUp = () => {
	const {setUser} = useUser();
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = formData.get('email');
		const password = formData.get('password');

		const response = await authAPI.post('/register', {email, password});
		if (response.data.token) {
			localStorage.setItem('token', response.data.token);
		}
		if (response.data.id) {
			setUser({id: response.data.id});
		}
	}
	return (
			<form onSubmit={handleSubmit}>
				<Input required name='email' type="email" placeholder="Email" />
				<Input required name='password' type="password" placeholder="Password" />
				<Button>Sign up</Button>
			</form>
	);
};

export default SignUp;