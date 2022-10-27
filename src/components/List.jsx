import React from "react";
import ListElement from "./ListElement.jsx"

//create your first component
const List = (props) => {
	const { todoElements = ["There is no pending task"], 
	deleteElement 
	} = props;
	return (
		<div className="text-center">
			{
				todoElements.map((element, index) => (
					<ListElement 
					key={index}
					todoText={element}
					deleteElement={deleteElement}
					/>
				))
			}	
		</div>
	);
};

export default List;
