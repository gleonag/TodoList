import React, {useState, useEffect} from "react";


//create your first component
const Input = (props) => {
	const {onNewElement} = props;
	const [text, setText] = useState("");
	const [todoElements, setTodoElements] = useState([]);

	const handleChange = (event) => {
		const {value} = event.target;
		setText(value);
		
	}

	useEffect(() => {
		onNewElement(todoElements);
	}, [todoElements]);
	const handleSubmit = (event) => {
		event.preventDefault() //para que no recargue la pagina al clickar en submit (previene el comportamiento por defecto del evento)
		const updateFunction = current => [...current, text];
		setTodoElements(updateFunction);
		setText("")
		console.log(todoElements) // BORRAR LUEGO

	}
	return (
		<div className="text-center">
		
			<form onSubmit={handleSubmit}>


				<input 
					type="text"   //en vez de poner un button podriamos poner type="submit" para prescindir de el
					placeholder="Type your task here" 
					onChange={handleChange}
					value={text}/>
				<button type="submit" className="btn btn-primary" >
					Create ToDo
					</button>
			</form>
			{todoElements.map((element, index) => <div key={index}> {element}</div>)}
		</div>
	);
};

export default Input;
