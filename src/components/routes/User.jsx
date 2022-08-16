import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GithubContext } from '../context/GithubContext';

export default function User() {
  const { getUser } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  },[])

  return <h2>User</h2>;
}
