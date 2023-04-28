import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import {  toast } from 'react-toastify';
import Color from "../HOC/Color";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "home work" },
      { id: "todo2", title: "work" },
    ],
    editTodo: {}
  }
  addNewTodo = (todo) =>{
    this.setState({listTodos:[...this.state.listTodos,todo]})
    toast.success("Wow so easy!");
  }

  handleDeleteTodo = (todo) =>{
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter(item => item.id !== todo.id);
    this.setState({listTodos: currentTodos})
    toast.error("to deleted")
  }
  handleEditSaveTodo = (todo) =>{
    let { listTodos,editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
  //save
    if(isEmptyObj === false && editTodo.id === todo.id){
    let objIndex = listTodos.findIndex((item => item.id === todo.id));



//Update object's name property.
    listTodos[objIndex].title = editTodo.title;
    this.setState({editTodo:{}});
    toast.success("save successfully");
      // this.setState({listTodos: listTodos});
      return;
    }
    this.setState({
      editTodo: todo
    })
  }
  handleChangeEdit= (event) =>{
    let editTodoCopy = {...this.state.editTodo};
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy
    })
  };
  render() {
    let { listTodos,editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("check",isEmptyObj)
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo}/>
        
        <div className="list-todo-content">
            {listTodos &&listTodos.length > 0 && listTodos.map((item,index) =>{
                return(
                    <div className="todo-child" key={item.id}> 
                      {isEmptyObj ?
                        <span>{index+1}-{item.title}</span> 
                      : <>
                          {editTodo.id===item.id ?
                            <span onChange={(event)=>this.handleChangeEdit(event)}><input value={editTodo.title}/></span>
                          :
                            <span>{index+1}-{item.title}</span> 
                       
                          }
                        </>
                      }
                        <button onClick={()=>this.handleEditSaveTodo(item)}>
                          {!isEmptyObj&&editTodo.id===item.id ? 'save' : 'edit'}
                        
                        </button>
                        <button onClick={()=>this.handleDeleteTodo(item)}>delete</button>
                    </div> 
                )
            })}
          
         
          
        </div>
      </div>
    );
  }
}
export default Color(ListTodo);
