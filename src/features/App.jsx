import React, {useState} from "react";
import Input from "../components/Input/Input.jsx"
import Title from "../components/Title.jsx"
import List from "../components/List.jsx"


const App = () => {
    const [todoList, setTodoList] = useState ([])
    const deleteElement = (elementId) => {
        const updateArray = (array, id) => {
            return array.filter((elem) => elem.id !== id) 
            
        }
        setTodoList(currentArray => updateArray(currentArray, elementId))
    }
    const handleNewElement = (element) =>{
        const updateFunction = current => [...current, element]
        setTodoList(updateFunction)


    }
    return <div>
        <Title />
        <Input onNewElement={handleNewElement}
            />
        <List todoElements={todoList} deleteElement={deleteElement}/>  
    </div>
}
export default App