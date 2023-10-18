import { initializeApp } from "firebase/app";
import { useState, useEffect, useCallback } from "react";
import { getDatabase, ref, onValue, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKvAUIGiB_zTX8gn5tKM7cIS9eHChm2io",
  authDomain: "quick-react-4dc21.firebaseapp.com",
  databaseURL: "https://quick-react-4dc21-default-rtdb.firebaseio.com",
  projectId: "quick-react-4dc21",
  storageBucket: "quick-react-4dc21.appspot.com",
  messagingSenderId: "530009557608",
  appId: "1:530009557608:web:124e8ecad414de17a649dd",
  measurementId: "G-WB0FTKK1MB",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};
