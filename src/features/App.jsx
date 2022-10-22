import React, {useState} from "react";
import Input from "../components/Input/Input.jsx"
import Title from "../components/Title.jsx"
import List from "../components/List.jsx"


const App = () => {
    const [todoList, setTodoList] = useState ([])
    return <div>
        <Title />
        <Input onNewElement={(elements) => setTodoList(elements)}/>
        <List todoElements={todoList}/>  
    </div>
}
export default App