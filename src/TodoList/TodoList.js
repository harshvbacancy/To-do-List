import React from 'react'
import TodoItem from './TodoItem'

import './TodoList.css'



const TodoList = (props) => {

    const items = props.items;  
    return (
       <ul className="Ul">
           <h3 className="Todo">Todo List</h3>

           {
            items.map(item => {
                return( 
                    <TodoItem 
                        key={item.id}
                        title={item.title}
                        checked={item.checked}
                        handleDelete={() => props.handleDelete(item.id)}
                        handleEdit={() => props.handleEdit(item.id)}
                        handleChecked={() => props.handleChecked(item.id)}
                    />
                )
            })
           }
         
            <button
                type="button" 
                className="Clear"
                onClick ={props.clearList}>Clear List</button>
       </ul>
       
    )
}

export default TodoList