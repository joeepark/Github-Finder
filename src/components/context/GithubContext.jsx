import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

// eslint-disable-next-line no-undef
export const GithubContext = createContext();

export default function UserProvider({ children }) {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    try {
      const params = new URLSearchParams({
        q: text,
      });
      const response = await fetch(`https://api.github.com/search/users?${params}`);
      const data = await response.json();
      dispatch({
        type: 'GET_USERS',
        payload: data.items,
      });
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getUser = async (login) => {
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      const data = await response.json();
      dispatch({
        type: 'GET_USER',
        payload: data,
      });
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const clearSearch = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, user: state.user, searchUsers, clearSearch, getUser }}
    >
      {children}
    </GithubContext.Provider>
  );
}
