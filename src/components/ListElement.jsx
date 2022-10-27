import React from "react";

const ListElement = (props) => {
    const {t9odoElement, deleteElement} = props
    
    const handleClick = () => {
        deleteElement(todoElement.id)
    }
    return (
        <div>
        <div>{todoElement}</div>
        <button onClick={handleClick} type="button" className="btn btn-outline-danger">
            x
        </button>
        </div>
    )
}
export default ListElement;