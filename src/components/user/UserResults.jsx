import { useContext } from 'react';
import { GithubContext } from '../context/GithubContext';
import UserItems from './UserItems';
import { AlertContext } from '../context/AlertContext';
import AlertUser from './UserAlert';

export default function UserResults() {
  const { users } = useContext(GithubContext);
  const { isLoading } = useContext(AlertContext);

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
    <AlertUser />;
  }
}
