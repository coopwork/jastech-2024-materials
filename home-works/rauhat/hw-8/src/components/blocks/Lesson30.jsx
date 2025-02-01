import Counter from "../Counter";
import Button from "../Button";
import {shopItems} from "../../constants/shop-items";
import ShopItem from "../ShopItem";
import {useState} from "react";
import PasswordInput from "../PasswordInput";


const Lesson30 = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [password, setPassword] = useState('');

	console.log('password', password)
	return (
			<div>
				<h1>
					WORKING
				</h1>
				<PasswordInput
						value={password}
						onChange={(e) => setPassword(e.target.value)}
				/>

				<Counter/>
				<Button
						onClick={() => setIsLoading(true)}
						isLoading={isLoading}
				>
					Start app
				</Button>

				<Button
						onClick={() => setIsLoading(false)}
				>
					End app
				</Button>

				{shopItems?.map((shopItem) => (
						<ShopItem key={shopItem.id} item={shopItem}/>
				))}
			</div>
	);
};

export default Lesson30;