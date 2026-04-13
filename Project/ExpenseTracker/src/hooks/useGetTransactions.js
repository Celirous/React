import { useEffect, useState } from "react";
import { query, collection, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionTotals, setTransactionTotals] = useState({
    balance: 0.0,
    income: 0.0,
    expenses: 0.0,
  });

  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  useEffect(() => {
    if (!userID) return; // Don't run the query if we don't have a user

    const queryTransactions = query(
      transactionCollectionRef,
      where("userID", "==", userID),
      orderBy("createdAt")
    );

    // This listener will automatically update the UI when the index is ready
    const unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
      let docs = [];
      let totalIncome = 0;
      let totalExpenses = 0;

      snapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;

        docs.push({ ...data, id });

        if (data.transactionType === "expense") {
          totalExpenses += Number(data.transactionAmount);
        } else {
          totalIncome += Number(data.transactionAmount);
        }
      });

      setTransactions(docs);
      setTransactionTotals({
        balance: totalIncome - totalExpenses,
        expenses: totalExpenses,
        income: totalIncome,
      });
    }, (error) => {
      // This will catch the "missing index" error in your console
      console.error("Firestore Error:", error);
    });

    return () => unsubscribe();
  }, [userID]); // Re-run if the user changes

  return { transactions, transactionTotals };
};