import React from 'react'
import TodoItem from './TodoItem'

import './TodoList.css'



const TodoList = (props) => {

    const items = props.items;  
    return (
       <ul className="Ul">
           <h3 className="Todo">Todo List</h3>

           {
            items.map((item, index) => { 
                return( 
                    <TodoItem 
                        key={item.id}
                        title={item.title}
                        checkedItem={props.checked[index]}
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
                onClick ={props.clearList}>Clear the List</button>
       </ul>
       
    )
}

export default TodoList