import { Link } from 'react-router-dom';

export default function UserItems({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="avatar-images" />
            </div>
          </div>
        </div>
        <div>
          <Link className="text-white" to={`/user/${login}`}>
            <h2 className="card-title">{login}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
