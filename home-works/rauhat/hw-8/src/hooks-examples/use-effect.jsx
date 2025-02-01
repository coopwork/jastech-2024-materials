import {useEffect, useState} from "react";

const UseEffect = () => {
	const [count, setCount] = useState(1);
	const [state, setState] = useState('');

	const [counter, setCounter] = useState(1);
	// console.log('state', state);


	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
				.then(response => response.json())
				.then(json => setState(json));

		// console.log('componentUpdated')
	}, [count]);

	const myFn = () => {
		console.log('LOG WORKED');
	}

	useEffect(() => {
		// console.log('componentDidMount');

		const myBtn = document.querySelector('.listenerButton');

		myBtn.addEventListener('click', myFn)
		const myInterval = setInterval(() => {
			setCounter(prev => prev + 1);
		}, 1000);


		return () => {
			clearInterval(myInterval);
			myBtn.removeEventListener('click', myFn)
			// console.log('componentWillUnmount');
		}
	}, []);

	return (
			<div>
				<h3>
					USE EFFECT
				</h3>

				<button className='listenerButton'>LOG</button>

				<div>
					<h2>
						COUNTER {counter}
					</h2>
				</div>

				<pre>
					{JSON.stringify(state, null, 2)}
				</pre>

				<div>
					<h1>{count}</h1>
					<button onClick={() => setCount(count + 1)}>+</button>
					<button onClick={() => setCount(count - 1)}>-</button>
				</div>
			</div>
	);
};

export default UseEffect;