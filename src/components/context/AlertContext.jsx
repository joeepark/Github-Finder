import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

export const AlertContext = createContext();

export default function AlertProvider({ children }) {
  const intialState = null;

  const [state, dispatch] = useReducer(AlertReducer, intialState);

  const setLoading = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    });
    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ setLoading, isLoading: state }}>
      {children}
    </AlertContext.Provider>
  );
}
