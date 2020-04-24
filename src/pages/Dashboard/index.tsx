import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';

import logoExplorer from '../../assets/logoExplorer.svg';

import RepositoryCard from './components/RepositoryCard';
import { Title, Form, Input, Button, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repos, setRepos] = useState<Repository[]>(() => {
    const localStorageRepos = localStorage.getItem('@githubexplorer:repositories');
    if(localStorageRepos) {
      return JSON.parse(localStorageRepos);
    }

    return []
  });

  useEffect(() => {
    localStorage.setItem('@githubexplorer:repositories', JSON.stringify(repos));
  }, [repos]);

  async function handleAddRepo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newRepo) {
      setInputError('You must type something.');
      return;
    }

    try {
      const res = await api.get(`/repos/${newRepo}`);
      setRepos([...repos, res.data]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      console.error(error);
      setInputError('Error looking up your repository.');
    }
  }

  return (
    <>
      <img src={logoExplorer} alt="githubimage"/>
      <Title>Explore GitHub repositories.</Title>
      <Form onSubmit={handleAddRepo}>
        <Input
          hasError={!!inputError}
          placeholder="Your search here."
          onChange={(e: any) => setNewRepo(e.target.value)}
          value={newRepo}
        />
        <Button type="submit">Search</Button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repos.map((repo) => (
          <RepositoryCard
            fullname={repo.full_name}
            owner={repo.owner}
            description={repo.description}
          />
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
