import React from 'react';
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi';

interface Props {

  fullname: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const RepositoryCard: React.FC<Props> = ({
  fullname,
  owner: { login, avatar_url },
  description,
}) => {
  return (
    <>
      <Link key={fullname} to={`/repository/${fullname}`}>
        <img src={avatar_url} alt={login} />
        <div>
          <strong>{fullname}</strong>
          <p>{description}</p>
        </div>
        <FiChevronRight size={20} />
      </Link>
    </>
  );
};

export default RepositoryCard;
