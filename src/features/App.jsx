import React, {useState} from "react";
import Input from "../components/Input/Input.jsx"
import Title from "../components/Title.jsx"
import List from "../components/List.jsx"


const App = () => {
    const [todoList, setTodoList] = useState ([])
    const deleteElement = (elementId) => {
        const updateArray = (array, id) => {
            array.filter((elem) => {
                if (elem.id !== id) {
                    return elem
                }
            })
            return array
        }
        setTodoList(currentArray => currentArray) 
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