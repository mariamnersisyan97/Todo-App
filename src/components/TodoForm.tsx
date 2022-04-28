import React from "react";

class TodoForm extends React.Component {
  state = { term: "" };
  onFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(this.state.term);
  };

  // onFormSubmit(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   console.log(this.state.term);
  // }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Todo List</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
