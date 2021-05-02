import React, { Component } from "react";
import EmployeForm from "./TransactionForm";

class EmployeList extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList(),
  };

  returnList() {
    if (localStorage.getItem("transactions") == null)
      localStorage.setItem("transactions", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("transactions"));
  }

  handleEdit = (index) => {
    this.setState({
      currentIndex: index,
    });
  };

  handleDelete = (index) => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  onAddOrEdit = (data) => {
    var list = this.returnList();
    if (this.state.currentIndex == -1) list.push(data);
    else list[this.state.currentIndex] = data;
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list, currentIndex: -1 });
  };

  render() {
    return (
      <div>
        <EmployeForm
          currentIndex={this.state.currentIndex}
          list={this.state.list}
          onAddOrEdit={this.onAddOrEdit}
        />
        <hr />
        <center>
          <caption>
            <h1>EmployeeDetails</h1>
          </caption>
          <table id="t01">
            <tbody>
              {this.state.list.map((item, index) => {
                return (
                  <table>
                    <tr key={index}>
                      <td>{item.employeName}</td>
                      <td>{item.employeDest}</td>
                      <td>{item.employeSalary}</td>
                      <td>
                        <button onClick={() => this.handleEdit(index)}>
                          Edit
                        </button>
                      </td>
                      <td>
                        <button onClick={() => this.handleDelete(index)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  </table>
                );
              })}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}

export default EmployeList;
