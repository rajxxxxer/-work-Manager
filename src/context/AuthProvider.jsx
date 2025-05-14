// context/AuthProvider.js
import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    setLocalStorage(); // Ensure data is initialized
    const { admin, employees } = getLocalStorage();
    setAdmin(admin);
    setUserdata(employees);
  }, []);

  return (
    <AuthContext.Provider value={{ admin, setAdmin, userdata, setUserdata }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
