import { createContext, useState } from 'react';

// eslint-disable-next-line no-undef
export const GithubContext = createContext();

export default function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/users`);
      const data = await response.json();
      // console.log('data', data)
      setUsers(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  console.log('users', users);
  return (
    <GithubContext.Provider value={{ users, isLoading, fetchData }}>
      {children}
    </GithubContext.Provider>
  );
}
