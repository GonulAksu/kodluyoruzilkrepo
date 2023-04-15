import React, { useEffect, useState } from 'react'
import TodoApp from './TodoApp';

const Container = () => {
  const [text,setText]=useState('');
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filterTodo,setFiltertodo]=useState([]);
  const [counter,setCounter]=useState(0);
  useEffect(()=>{
    if(status==="active"){
      //active ise isChecked false olanları filtrele
      setFiltertodo(todos.filter((t)=>{
         return t.isChecked===false
      }))
    }
    else if(status==='completed'){
      setFiltertodo(todos.filter((t)=>{
        return t.isChecked===true
      }))
    }
    else{
      return  setFiltertodo(todos);
    }

    const cntr=todos.filter((ct)=>{
       return ct.isChecked===false
    })
    setCounter(cntr.length);

  },[todos,status])
  return (
    <>
       <section className="todoapp">
        <TodoApp setText={setText} text={text} setTodos={setTodos} todos={todos}></TodoApp>
       </section>
    </>
  )
}

export default Container
