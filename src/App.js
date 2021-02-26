import React, {Component} from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import {connect} from 'react-redux'
import * as actionTypes from './store/actions';
import './App.css';


class App extends Component {

  state = {
    checked: []
  };

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
  }
 
  

  handleSubmit = (e) => {
    e.preventDefault();
    let item= this.state.item

    if(item.trim() === "") {
      alert("Add your item")
    }
    else {
      this.props.onAddedTask(item);
      this.setState({item: ''})
    }
    // const newItem = {
    //   id: this.state.id,
    //   title: this.state.item
  
    // };

    // const checkedState = [...this.state.checked];
    // checkedState.push(false);

    // console.log(newItem);
    

    //  const updatedItems = [...this.state.items, newItem] 
    //   this.setState({
    //     items: updatedItems,
    //     item:'',
    //     id: Date.now(),
    //     editItem: false,
    //     checked: [...checkedState]
        
    //   })
    
  };

  clearList = () => {
    this.setState({
      items :[]
    });
  };

  // handleDelete = id => {
  //   const filterdItem = this.state.items.filter(item => item.id !== id)
  //   this.setState({
  //     items: filterdItem
  //   });
  // }

  handleEdit = id => {
   
    this.props.onEditTask(id)
    const selectedItem = this.props.itms.find(item => item.id === id)

    console.log(selectedItem);

    this.setState({
      item:selectedItem.title
    });
    
  }

  handleChecked = id => {

      let itemSelected = [...this.props.itms]

      const i = itemSelected.findIndex(item => item.id === id)
      

      let checkedItem =[...this.state.checked]

      checkedItem[i]= !checkedItem[i]

     this.setState({
        checked:checkedItem

    });
    
  }
 
 
  render() {
   
    
    return (

      <div className="App">
        <h1 className="Title">Add New Task</h1>
        <TodoForm
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit= {this.handleSubmit}
          editItem={this.props.editm}/>
        <TodoList 
          items={this.props.itms} 
          checked={this.state.checked}
          clearList= {this.clearList}
          handleDelete = {this.props.onDeleteTask}
          handleEdit = {this.handleEdit}
          handleChecked = {this.handleChecked} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      itms: state.items,

      editm: state.editItem 

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddedTask: (item) => dispatch({type: actionTypes.ADD_TASK, item:item}),
    onDeleteTask: (id) => dispatch({type: actionTypes.DELETE_TASK, Itemid: id}),
    onEditTask: (id) => dispatch({type: actionTypes.EDIT_TASK, Itemid: id}) 
  }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(App);
