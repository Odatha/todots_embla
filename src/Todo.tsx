import React, { Component } from "react";
import TodoLists from "./TodoLists";

import FormTodo from "./FormTodo";
import FormInput from "./FormInput";

class Todo extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      lists: [
        {
          text: "power on the devices",
          key: 1,
          date: "5-6-2019"
        },
        {
          text: "dinner party",
          key: 2,
          date: "6-6-2019"
        },
        {
          text: "power on the devices",
          key: 3,
          date: "10-6-2019"
        }
      ]
    };
    this.addList = this.addList.bind(this);
  }

  deleteList(deleteItem: CustomEvent) {
    var filterItems = this.state.lists.filter(newLists => {
      return newLists != deleteItem;
    });
    this.setState({ lists: filterItems });
  }

  onEditHandle(e) {
    this.setState({
      edit: true,
      key: arguments[0],
      text: arguments[1],
      date: arguments[2]
    });
  }

  onUpdateHandle(e) {
    e.preventDefault();

    this.setState({
      lists: this.state.lists.map(item => {
        if (item.key === this.state.key) {
          item["text"] = e.target.updatedItem.value;
          item["date"] = e.target.updatedDate.value;
          return item;
        }
        return item;
      })
    });
    this.setState({
      edit: false
    });
  }

  addList(e) {
    e.preventDefault();

    this.setState({
      lists: [
        ...this.state.lists,
        {
          key: Date.now(),
          text: e.target.item.value,
          date: e.target.pickedDate.value
        }
      ]
    });

    e.target.item.value = "";
  }

  renderEditForm() {
    if (this.state.edit) {
      return (
        <FormTodo onSubmit={this.onUpdateHandle.bind(this)} label="Update">
          <FormInput
            name={"updatedItem"}
            type={"text"}
            defaultValue={this.state.text}
          ></FormInput>
          <FormInput
            name={"updatedDate"}
            type={"date"}
            defaultValue={this.state.date}
          ></FormInput>
        </FormTodo>
      );
    }
  }

  render() {
    return (
      <div className="mainList">
        <div className="header">
          {this.renderEditForm()}
          <FormTodo onSubmit={this.addList.bind(this)} label="Add">
            <FormInput
              type={"text"}
              name={"item"}
              placeholder={"what are your todo s??"}
            ></FormInput>

            <FormInput type={"date"} name={"pickedDate"}></FormInput>
          </FormTodo>
          <TodoLists
            onEditHandle={this.onEditHandle.bind(this)}
            deleteList={this.deleteList.bind(this)}
            displays={this.state.lists}
          />
        </div>
      </div>
    );
  }
}
export default Todo;
