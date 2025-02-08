import {NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu.tsx";
import {Link} from "react-router-dom";
import {NAVIGATION} from "@/utils/constants/navigation.ts";

const Navigation = () => {
	return (
			<NavigationMenu>
				<NavigationMenuList>
					{NAVIGATION.map(({path, title}) => (
							<NavigationMenuItem key={path} asChild>
								<Link to={path} className={navigationMenuTriggerStyle()}>
									{title}
								</Link>
							</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
	);
};

export default Navigation;