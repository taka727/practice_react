import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue === "") return;
    setTodos([...todos,inputValue]);

    setInputValue("");
  };

  const deleteTodos = (index)=>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  
  return (
    <div style={{padding: '20px',maxWidth: '300px',margin: '0 auto'}}>
      <h1>簡易Todoアプリ</h1>
      <input 
        type="text"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)} 
        placeholder='何をする？'
        />
        <button onClick={addTodo}>追加</button>
        <ul>
          {todos.map((todo,index)=>(
            <li key={index}>{todo}
            <button 
            onClick={()=> deleteTodos(index)}
            style={{marginLeft: '10px'}}>削除</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App
