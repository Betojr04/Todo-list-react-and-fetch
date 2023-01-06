import React, {useState, useEffect} from "react";


const Todo = () => {
    const [todos, setTodos] = useState([])
    const [formvalue, setFormValue] = useState({})
    useEffect(()=>{
        fetch("https://assets.breatheco.de/apis/fake/todos/user/betojr").then(res=>{
            return res.json()
        }).then(data=>{
            setTodos(data)
        })
    },[])
    useEffect(()=>{
        fetch("https://assets.breatheco.de/apis/fake/todos/user/betojr", {
            method: "PUT",
            body: JSON.stringify(todos),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res=>{
            return(res.json())
        }).then(res=>console.log(res)).catch(err=>{
            console.log(err)
        })
    },[todos])

    const addToDo = () => {
        setTodos([...todos, formvalue])
    }

    const inputChange = (e) => {
        setFormValue({label: e.target.value, done:false})
    }
    
    const removeToDo = (index) => {
        setTodos(todos=>todos.filter((item, i)=>i != index))
    }

    return (
        <div>
            <h2>Todo List</h2>
            <div className="form-container">
                <input onChange={inputChange} type="text" />
                <button className="mt-1" onClick={addToDo}>Add To-do</button>
            </div>
            {todos.length ? todos.map((item, index) => {
                return (<h6>{item.label}<button className="glyphicon glyphicon-trash" onClick={()=>removeToDo(index)}>Delete</button></h6>)
            }): null}
        </div>
    );
};
export default Todo