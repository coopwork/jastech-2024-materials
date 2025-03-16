import {useContext} from "react";
import {UserContext} from "@/providers/user/user.context.ts";


export function useUser() {
	return useContext(UserContext)
}