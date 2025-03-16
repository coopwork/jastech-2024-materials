export type UserType = {
	id: number;
	email: string;
	avatar: string
	first_name: string
	last_name: string
	role: 'AUTHORIZED' | 'UNAUTHORIZED'
}
export type UserSetterType = {
	id?: number;
	email?: string;
	avatar?: string
	first_name?: string
	last_name?: string
	role?: 'AUTHORIZED' | 'UNAUTHORIZED'
}