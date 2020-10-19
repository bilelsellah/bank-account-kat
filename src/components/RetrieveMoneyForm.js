import React, { Component } from "react";

class RetrieveMoneyForm extends Component {
  state = { amountToRetrieve: 0 };

  amountToRetrieveChange = (e) => {
    this.setState({
      amountToRetrieve: e.target.value,
    });
  };

  retrieveMoney = (e) => {
    e.preventDefault();
    this.props.retrieveMoney(this.state.amountToRetrieve);
    this.setState({ amountToRetrieve: 0 });
  };

  render() {
    return (
      <div>
        <h2>Retrieve money</h2>
        <form onSubmit={this.retrieveMoney}>
          <input
            type="text"
            value={this.state.amountToRetrieve}
            onChange={this.amountToRetrieveChange}
          />
          <button>Retrieve money</button>
        </form>
      </div>
    );
  }
}

export default RetrieveMoneyForm;
