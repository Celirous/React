import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAddTransaction } from "../../hooks/useAddTransactions"; // Fixed: Plural
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useDeleteTransaction } from "../../hooks/useDeleteTransactions"; // Fixed: Plural
import { auth } from "../../config/firebase-config";
import "./styles.css";

export const ExpenseTracker = () => {
  const { addTransaction, updateTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();
  const { deleteTransaction } = useDeleteTransaction();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const [isEditing, setIsEditing] = useState(null);

  const { balance, income, expenses } = transactionTotals;

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateTransaction(isEditing, {
        description,
        transactionAmount: Number(transactionAmount),
        transactionType,
      });
      setIsEditing(null);
    } else {
      addTransaction({
        description,
        transactionAmount: Number(transactionAmount),
        transactionType,
      });
    }
    setDescription("");
    setTransactionAmount(0);
  };

  const startEdit = (transaction) => {
    setIsEditing(transaction.id);
    setDescription(transaction.description);
    setTransactionAmount(transaction.transactionAmount);
    setTransactionType(transaction.transactionType);
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="tracker-page">
      <div className="header">
        <h1>{name}'s Tracker</h1>
        <div className="profile-section">
          {profilePhoto ? (
            <img className="profile-photo" src={profilePhoto} alt="profile" />
          ) : (
            <div className="profile-placeholder">
              {name?.charAt(0).toUpperCase()}
            </div>
          )}
          <button className="sign-out-btn" onClick={signUserOut}>
            Sign Out
          </button>
        </div>
      </div>

      <div className="main-container">
        <div className="dashboard-card">
          <div className="balance">
            <h3>Your Balance</h3>
            <h2 className={balance >= 0 ? "positive" : "negative"}>
              {balance >= 0 ? `R${balance}` : `-R${Math.abs(balance)}`}
            </h2>
          </div>
          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>R{income}</p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p>R{expenses}</p>
            </div>
          </div>

          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              value={transactionAmount}
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <div className="radio-group">
              <input
                type="radio"
                id="expense"
                value="expense"
                checked={transactionType === "expense"}
                onChange={(e) => setTransactionType(e.target.value)}
              />
              <label htmlFor="expense">Expense</label>
              <input
                type="radio"
                id="income"
                value="income"
                checked={transactionType === "income"}
                onChange={(e) => setTransactionType(e.target.value)}
              />
              <label htmlFor="income">Income</label>
            </div>

            <button type="submit" className="submit-btn">
              {isEditing ? "Update" : "Add Transaction"}
            </button>
          </form>
        </div>

        <div className="transactions-container">
          <h3>Recent History</h3>
          <ul>
            {transactions.map((transaction) => {
              const { description, transactionAmount, transactionType, id } =
                transaction;
              // Check if this specific ID matches the one in our editing state
              const isCurrentlyEditing = isEditing === id;

              return (
                <li
                  key={id}
                  className={`transaction-item ${isCurrentlyEditing ? "editing-active" : ""}`}
                >
                  <div className="info">
                    <h4>
                      {description}
                      {/* Add the label here */}
                      {isCurrentlyEditing && (
                        <span className="editing-label"> (Now Editing...)</span>
                      )}
                    </h4>
                    <p className={transactionType}>
                      {transactionType === "expense" ? "-" : "+"}R
                      {transactionAmount}
                    </p>
                  </div>
                  <div className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => startEdit(transaction)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTransaction(id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
