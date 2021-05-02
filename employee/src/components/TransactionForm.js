import React, { Component } from "react";

class EmployeForm extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex == -1)
      return {
        employeId: "",
        employeName: "",
        employeDest: "",
        employeSalary: "",
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex != this.props.currentIndex ||
      prevProps.list != this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
      console.log(prevProps, this.props);
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <center>
          <fieldset>
            <legend>EMPLOYEE:</legend>
            EMPLOYEE ID
            <input
              name="employeId"
              placeholder=" employee id"
              onChange={this.handleInputChange}
              value={this.state.employeId}
            />
            <br />
            EMPLOYEE NAME
            <input
              name="employeName"
              placeholder="name of employee"
              onChange={this.handleInputChange}
              value={this.state.employeName}
            />
            <br />
            EMPLOYEE DESIGNATION
            <input
              name="employeDest"
              placeholder="designation"
              onChange={this.handleInputChange}
              value={this.state.employeDest}
            />
            <br />
            EMPLOYEE SALARY
            <input
              name="employeSalary"
              placeholder="your salary"
              onChange={this.handleInputChange}
              value={this.state.employeSalary}
            />
            <br />
            <button type="submit">Submit</button>
          </fieldset>
        </center>
      </form>
    );
  }
}

export default EmployeForm;
