import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";

export const useDeleteTransaction = () => {
  const deleteTransaction = async (transactionID) => {
    const transactionDocRef = doc(db, "transactions", transactionID);
    await deleteDoc(transactionDocRef);
  };

  return { deleteTransaction };
};