import React from "react";
import "./App.css";
import SaveMoneyForm from "./components/SaveMoneyForm";
import RetrieveMoneyForm from "./components/RetrieveMoneyForm";
import History from "./components/History";

class App extends React.Component {
  state = {
    date: null,
    balance: 0,
    operations: [],
    historyVisible: true,
  };

  saveMoney = async (amount) => {
    if (amount && !isNaN(parseFloat(amount))) {
      await this.setState({
        balance: this.state.balance + parseFloat(amount),
        date: new Date().toLocaleDateString(),
      });
      const operation = {
        date: new Date().toLocaleDateString(),
        amount,
        balance: this.state.balance,
        type: "save",
      };

      await this.setState({
        operations: [...this.state.operations, operation],
      });
    }
  };

  retrieveMoney = async (amount) => {
    if (amount && !isNaN(parseFloat(amount))) {
      await this.setState({
        balance: this.state.balance - parseFloat(amount),
        date: new Date().toLocaleDateString(),
      });
      const operation = {
        date: new Date().toLocaleDateString(),
        amount,
        balance: this.state.balance,
        type: "retrieve",
      };

      await this.setState({
        operations: [...this.state.operations, operation],
      });
    }
  };

  showHistory = () => {
    this.setState((prevState) => ({
      historyVisible: !prevState.historyVisible,
    }));
  };

  render() {
    return (
      <div className="App">
        <SaveMoneyForm saveMoney={this.saveMoney} />
        <RetrieveMoneyForm retrieveMoney={this.retrieveMoney} />
        <History
          operations={this.state.operations}
          showHistory={this.showHistory}
          historyVisible={this.state.historyVisible}
        />
      </div>
    );
  }
}

export default App;
