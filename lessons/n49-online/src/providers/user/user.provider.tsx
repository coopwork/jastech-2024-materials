import {useState} from "react";
import {UserSetterType, UserType} from "@/utils/types/user.type.ts";
import {authAPI} from "@/utils/api/instance.ts";
import {UserContext} from "@/providers/user/user.context.ts";


const UserProvider = ({children}:{children: React.ReactNode}) => {
	const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
	const [user, setUser] = useState<UserType | undefined>(localUser);

	const handleSetUser = async (update: UserSetterType) => {
		let updatedUser = update;
		if (update.id) {
			const response = await authAPI.get(`/users/${update.id}`);
			console.log(response.data.data)
			if (response.data.data) {
				updatedUser = {
					role: 'AUTHORIZED',
					...response.data.data
				};
				localStorage.setItem('user', JSON.stringify(updatedUser));
			}
		}

		if (user !== undefined) {
			setUser(prevState => ({ ...prevState, ...updatedUser }));
		} else {
			setUser(updatedUser);
		}
	}

	const signOut = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setUser(undefined);
	}

	const values = {
		user,
		setUser: handleSetUser,
		signOut,
	}
	return (
			<UserContext.Provider value={values}>
				{children}
			</UserContext.Provider>
	);
};

export default UserProvider;