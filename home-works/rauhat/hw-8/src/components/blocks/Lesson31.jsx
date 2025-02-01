import {useState} from "react";
import UseRef from "../../hooks-examples/use-ref";
import UseState from "../../hooks-examples/use-state";
import UseEffect from "../../hooks-examples/use-effect";


const Lesson31 = () => {
	const [isShow, setIsShow] = useState(true);
	return (
			<div>
				<UseState/>

				<div>
					<button onClick={() => setIsShow(!isShow)}>
						{isShow ? 'Hide' : 'Show'}
					</button>
					{isShow && <UseEffect/>}
				</div>

				<UseRef/>

			</div>
	);
};

export default Lesson31;