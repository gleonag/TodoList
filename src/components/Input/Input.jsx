import React, {useState, useEffect} from "react";


//create your first component 
const randomId = () => Math.round(Math.random()*1000)

const Input = (props) => {
	const {onNewElement} = props;
	const [text, setText] = useState("");
	const handleChange = (event) => {
		const {value} = event.target;
		setText(value);
		
	}


	const handleSubmit = (event) => {
		event.preventDefault() //para que no recargue la pagina al clickar en submit (previene el comportamiento por defecto del evento)
		onNewElement({id: randomId() , label:text, done: false})
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
		</div>
	);
};

export default Input;
