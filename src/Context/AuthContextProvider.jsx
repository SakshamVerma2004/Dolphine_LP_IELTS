import { createContext, useState } from "react";

export let AuthContext = createContext();
let AuthContextProvider = ({ children }) => {
  let [showForm2, setShowForm2] = useState(false);
  let [showForm, setShowForm] = useState(false);
  let obj = {
    showForm,
    setShowForm,
    showForm2,
    setShowForm2,
  };
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
