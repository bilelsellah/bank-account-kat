import React, { Component } from "react";

class SaveMoneyForm extends Component {
  state = { amountToSave: 0 };

  amountToSaveChange = (e) => {
    this.setState({
      amountToSave: e.target.value,
    });
  };

  saveMoney = (e) => {
    e.preventDefault();
    this.props.saveMoney(this.state.amountToSave);
    this.setState({ amountToSave: 0 });
  };

  render() {
    return (
      <div>
        <h2>Save money</h2>
        <form onSubmit={this.saveMoney}>
          <input
            type="text"
            value={this.state.amountToSave}
            onChange={this.amountToSaveChange}
          />
          <button>Save money</button>
        </form>
      </div>
    );
  }
}

export default SaveMoneyForm;
