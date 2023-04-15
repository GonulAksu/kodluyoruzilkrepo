import React from 'react'

const TodoApp = ({setText,text,setTodos,todos}) => {
  const onChange=(e)=>{
      setText(e.target.value);
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    if(text==='') return false;
    setTodos([...todos,{text,id:todos.length+1,
    isChecked:false,
    isEdit:false}
  ]);
  setText('');

  }
  return (
    <header className="header">
    <h1>todos</h1>
    <form onSubmit={onSubmit}>
      <input
        className="new-todo"
        onChange={onChange}
        placeholder="What needs to be done?"
        autoFocus
        value={text}
      />
    </form>
  </header>
  )
}

export default TodoApp
