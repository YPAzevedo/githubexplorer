import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import logoExplorer from '../../assets/logoExplorer.svg';

import { Header, RepositoryInfo, Issues } from './styles';

import IssueCard from './components/IssuesCard';

interface RepositoryParams {
  repository: string;
}

interface RepoInfo {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  open_issues: number;
  forks: number;
  stargazers_count: number;
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
  };
  html_url: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [issues, setIssues] = useState<Issue[]>();
  const [repoInfo, setRepoInfo] = useState<RepoInfo | null>(null);

  useEffect(() => {
    async function loadData() {
      const [repository, issues] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`),
      ]);
      setRepoInfo(repository.data);
      setIssues(issues.data);
    }
    loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoExplorer} alt="" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Go back
        </Link>
      </Header>
      {repoInfo && <RepositoryInfo>
        <header>
          <img src={repoInfo.owner.avatar_url} alt="" />
          <div>
            <strong>{repoInfo.full_name}</strong>
            <p>{repoInfo.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repoInfo.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repoInfo.forks}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repoInfo.open_issues}</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>}
      {issues && <Issues>
        {issues.map(issue => <IssueCard key={issue.id} title={issue.title} user={issue.user.login} url={issue.html_url} />)}
      </Issues>}
    </>
  );
};

export default Repository;
