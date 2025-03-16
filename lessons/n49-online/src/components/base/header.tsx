import {Link} from "react-router-dom";
import {useUser} from "@/hooks/use-user.tsx";
import {NAVIGATION} from "@/utils/constants/navigation.ts";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.tsx";

const Header = () => {
	const {user, signOut} = useUser();
	return (
			<header className='p-2.5 flex justify-between gap-4 items-center'>
				<nav className='flex items-center gap-4'>
					{NAVIGATION[user?.role || 'UNAUTHORIZED'].map(({path, label}) => (
							<Link key={path} to={path}>{label}</Link>
					))}
				</nav>

				{user && (
						<DropdownMenu>
							<DropdownMenuTrigger>
								<img src={user?.avatar} alt={user?.first_name} className='w-8 h-8 rounded-full'/>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>{user?.first_name} {user?.last_name}</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Link to={'/profile'}>
										Profile
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem onClick={signOut}>Sign out</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
				)}
			</header>
	);
};

export default Header;