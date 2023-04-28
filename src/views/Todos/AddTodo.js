import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnchange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (this.state.title !== "") {
      console(this.state.title);
      let todo = {
        id: Math.floor(Math.random() * 1000),
        title: this.state.title,
      };
      this.props.addNewTodo(todo);
      this.setState({
        title: "",
      });
    } else toast.error("missing ");
    return;
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          tyep="text"
          value={title}
          onChange={(event) => this.handleOnchange(event)}
        />
        <button type="button" onClick={() => this.handleAddTodo()}>
          add todo
        </button>
      </div>
    );
  }
}
export default AddTodo;
