import React from "react";

const ListElement = (props) => {
    const {todoText} = props
    
    const handleClick = () => {
        deleteElement()
    }
    return (
        <div>
        <div>{todoText}</div>
        <button onClick={handleClick} type="button" class="btn btn-outline-danger">
            x
        </button>
        </div>
    )
}
export default ListElement;