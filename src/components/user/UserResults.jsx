import { useContext } from 'react';
import { GithubContext } from '../context/GithubContext';
import UserItems from './UserItems';

export default function UserResults() {
  const { users, isLoading } = useContext(GithubContext);

  // console.log('users', users)
  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h2>...Loading</h2>;
  }
}
