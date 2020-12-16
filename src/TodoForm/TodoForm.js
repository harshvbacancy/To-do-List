import React from 'react'
import './TodoForm.css'

const TodoForm = (props) => {
     
     return (
        <div>
           <form id="form" onSubmit ={props.handleSubmit}>
            <input 
                type="text"
                placeholder="Enter task"
                value= {props.item}
                onChange = {props.handleChange }></input>
            <button type="submit">
                {props.editItem ? "Edit" : "Add"}</button>
          </form>
        </div>
     )
}

export default TodoForm