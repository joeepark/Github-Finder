import UserResults from '../user/UserResults';
import SearchUser from '../user/UserSearch';

const Home = () => {
  return (
    <div className="grid my-4">
      <SearchUser />
      <UserResults />
    </div>
  );
};

export default Home;
