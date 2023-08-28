import React, {useState} from 'react';
import { useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {v4 as uuidv4} from 'uuid';
import Todolist from './Todolist';
import EditTodoForm from './EditTodoFrom';
uuidv4();

const TodoWrapper=()=>{
    const[todos,setTodos]=useState([]);
     
 useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1/todos', { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTodos(data);

        });
    },[])


    const addTodo = todo =>{
        setTodos([...todos,{id:uuidv4(),title:todo,
            completed:false,isEditing:false}])
            console.log(todos)
         }
         
         const togglecomplete = id=> {
            setTodos(todos.map(todo => todo.id === id ? {...
                todo, completed: !todo.completed} : todo))
        }
        const deleteTodo =id =>{
            setTodos(todos.filter(todo =>todo.id !==id))
        }
        const editTodo =id =>{
            setTodos(todos.map(todo => todo.id === id ?{...
            todo,isEditing: !todo.isEditing} : todo))
        }
        const editTitle = (title, id,completed) => {
            setTodos(todos.map(todo =>todo.id === id ? {...
                todo,  title, completed, isEditing: !todo.isEditing} : todo))
        }
        
            



    return(
        <div className='TodoWrapper'>
            <h1>Todo List of Task</h1>
            
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index) =>(
                todo.isEditing ? (
                 <EditTodoForm editTodo = {editTitle} title = {todo}/>
                 ):(
                <Todo title={todo} key={index}
                togglecomplete={togglecomplete} deleteTodo=
                {deleteTodo} editTodo={editTodo}/>)
            
            ))}
            
            <Todolist/>   
        </div>
        
    )
}
export default TodoWrapper;