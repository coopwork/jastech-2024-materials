import {useState} from "react";

const UseState = () => {
	const [state, setState] = useState({
		name: "John",
		age: 30
	});
	const [arr, setArr] = useState([])
	console.log('state', state);
	console.log('arr', arr);

	const handleChangeState = (e) => {
		setState((prev) => (
				{
					...prev,
					[e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value
				}
		));

		setArr((prev) => [...prev, e.target.value]);

		setState(prevState => prevState + e.target.value);

	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('My form values', state);
	};

	return (
			<div>
				USE STATE
				<form onSubmit={handleSubmit}>
					<input
							name='name'
							placeholder='name'
							type="text"
							value={state.name}
							onChange={handleChangeState}
					/>

					<input
							name='age'
							placeholder='age'
							type="number"
							value={state.age}
							onChange={handleChangeState}
					/>

					<input
							name='address'
							placeholder='address'
							type="text"
							value={state?.address || ''}
							onChange={handleChangeState}
					/>

					<button>Send</button>
				</form>
			</div>
	);
};

export default UseState;