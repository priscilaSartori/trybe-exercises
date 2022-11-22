import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

function Home({ gitData }) {
  const [gitRepos, setGitRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(); // useEffect(callback, arrayDependencies)

  // componentDidMount

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const { repos_url: reposUrl } = gitData;
        const response = await fetch(reposUrl);
        const repos = await response.json();
        setGitRepos(repos);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);
  // componentDidUpdate
  useEffect(() => { });
  // componentWillUnmount
  // useEffect(() => {

  //   return () => {
  // executarAlgoAqui
  //   }
  // })
  // componentShouldUpdate
  useEffect(() => { }, [/* valores */]);

  const { name } = gitData;
  return (
    <div className="Home">
      <h1>HOME</h1>
      <h3>
        {name}
      </h3>
      <h1>Repositórios</h1>
    </div>
  );
}

export default Home;