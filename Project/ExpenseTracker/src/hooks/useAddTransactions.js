import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo(); // Pulls the ID we just saved in Auth

  const addTransaction = async ({ description, transactionAmount, transactionType }) => {
    // If for any reason userID is missing, we stop here to prevent database errors
    if (!userID) {
      console.error("No User ID found. Cannot save transaction.");
      return;
    }

    await addDoc(transactionCollectionRef, {
      userID, // Correctly associates the entry with the user
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp(),
    });
  };

  const updateTransaction = async (id, updatedData) => {
    const transactionDocRef = doc(db, "transactions", id);
    await updateDoc(transactionDocRef, updatedData);
  };

  return { addTransaction, updateTransaction };
};