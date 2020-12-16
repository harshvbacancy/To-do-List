import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
    return (
      <li className="List">
           <span><input type="checkbox" className="Checkbox" onClick = {props.handleChecked}></input></span>
          {props.checked ? <s><p> 
              
              {props.title}
              <span>
                  <button className="Edit" onClick={props.handleEdit}>Edit</button>
                  <button className="Delete" onClick ={props.handleDelete}>Delete</button>
                 
              </span>
            </p></s> : <p> 
              
              {props.title}
              <span>
                  <button className="Edit" onClick={props.handleEdit}>Edit</button>
                  <button className="Delete" onClick ={props.handleDelete}>Delete</button>
                 
              </span>
            </p>}
      </li>
    ) 
}

export default TodoItem