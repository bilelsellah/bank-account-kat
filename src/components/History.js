import React from "react";

const History = ({ showHistory, historyVisible, operations }) => (
  <div>
    <h2>History</h2>
    <button onClick={showHistory}>
      {historyVisible ? "Hide history" : "Show history"}
    </button>
    {historyVisible && (
      <div>
        {operations.map((operation, index) => (
          <div key={index}>
            Date: {operation.date} | Amount:{" "}
            {operation.type === "save"
              ? `+${operation.amount}`
              : `-${operation.amount}`}{" "}
            | Balance: {operation.balance}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default History;
