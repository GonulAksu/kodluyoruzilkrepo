import React from 'react'

const Main = ({data,setTodos}) => {
    
    const durumUpdate=(e)=>{
        let li=e.target.parentNode.parentNode;
        let sts;
        if(e.target.checked){
          li.classList.add('completed');
          sts='completed'
        } 
        else{
               li.classList.remove('completed')
               sts=''
            }

        data.map(d=>{
            console.log(d.id);
            console.log(e.target.id)
            if(d.id==e.target.id){
                console.log(true);
                setTodos({})
            }
        })
    }

  return (
    	
	<section className="main">
    <input className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">
        Mark all as complete
    </label>

    <ul className="todo-list">
        {data.map((d,index)=>{
            return  <li key={index}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={durumUpdate} id={d.id}/>
                <label>{d.todotext}</label>
                <button className="destroy" ></button>
            </div>
        </li>
        })}
    </ul>
</section>
  )
}

export default Main
