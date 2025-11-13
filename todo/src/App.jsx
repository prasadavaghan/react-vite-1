import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [todo,setTodo] = useState([]);
  const handleAddTodo =(e)=>{
    e.preventDefault();
    if(text.trim() ==='') return;
    let temp = [...todo];
    temp.push(text);
    setTodo(temp);
    setText('')
  }

  const handleDelete=(idx)=>{
    let temp =todo.filter((i,id)=>id !== idx)
    setTodo(temp)
  }
  console.log(todo)
  return (
    <div className='bg-white-100 w-full h-screen'>
      <h1 className='text-center'>Todo List</h1>
      <form onSubmit={handleAddTodo} className='text-center' >
       <input className='border-1' name="value" type='text' value={text} onChange={(e)=>setText(e.target.value)}  />
       <button className='ml-2 border-1 p-1' type='submit'>Add Todo</button>
      </form>
      <ul className='text-center mt-4'>
        {todo?.map((item,idx)=>{
          return(<li key={idx}>{idx+1}. {item}</li>)
        })}
      </ul>
    </div>
  )
}

export default App
