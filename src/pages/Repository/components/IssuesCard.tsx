import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

interface Props {
  title: string;
  user: string;
  url: string;
}

const IssueCard: React.FC<Props> = ({ title, user, url }) => {
  return (
    <>
      <a key={url} href={url} >
        <div>
          <strong>{user}</strong>
          <p>{title}</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </>
  );
};

export default IssueCard;
