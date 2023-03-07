import { createContext, useContext, useState } from 'react';

// createContext function creates a new context object. In this case, it creates a context object called StateContext and sets its initial value to an object with user and token properties set to null, and two functions setUser and updateToken set to empty functions.

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  updateToken: () => {},
});

// component takes a children prop and returns a StateContext.Provider component with the value prop set to an object with the user, token, setUser, and updateToken properties.

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

  const updateToken = (newToken) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem('ACCESS_TOKEN', newToken);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        updateToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);