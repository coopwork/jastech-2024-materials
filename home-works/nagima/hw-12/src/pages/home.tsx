import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";

const Home = () => {
	return (
			<div>
				<h1 className='text-foreground'>
					HOME PAGE
				</h1>
				<Input placeholder='My text'/>
				<Button className="bg-success text-white">
					Success Button
				</Button>





			</div>
	);
};

export default Home;