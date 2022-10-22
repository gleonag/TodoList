import React from "react";


//create your first component
const List = (props) => {
	const {todoElements = ["There is no pending task"]} = props;
	return (
		<div className="text-center">
			{
			todoElements.map((element, index) => <div key={index}> {element}</div>)
			}
		</div>
	);
};

export default List;
