import { useContext, useState } from 'react';
import { GithubContext } from '../context/GithubContext';
import AlertUser from './UserAlert';
import { AlertContext } from '../context/AlertContext';

export default function SearchUser() {
  const [text, setText] = useState('');
  const { searchUsers, clearSearch } = useContext(GithubContext);
  const { setLoading } = useContext(AlertContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (text === '') {
      setLoading('Please enter something', 'error');
    } else {
      searchUsers(text);
      setText('');
    }
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a user"
          value={text}
          onChange={handleChange}
          className="w-full pr-40 bg-gray-200 input input-lg text-black"
        ></input>
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={clearSearch}
        >
          Clear Search
        </button>
      </form>
    </>
  );
}
