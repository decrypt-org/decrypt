import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './team.module.css';

export default function Team() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch contributors from the decrypt-org/decrypt repository
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/decrypt-org/decrypt/contributors');
        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }
        const data = await response.json();
        setContributors(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  return (
    <Layout
      title="Our Team"
      description="The amazing contributors behind the Decrypt project">
      <main className={styles.teamContainer}>
        <h1 className={styles.title}>Project Contributors</h1>
        <p className={styles.subtitle}>
          Meet the brilliant minds building the future of open-source cryptography.
        </p>

        {loading && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Loading contributors...</p>
          </div>
        )}

        {error && (
          <div className={styles.error}>
            <p>Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className={styles.grid}>
            {contributors.map((user) => (
              <a
                key={user.id}
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className={styles.avatar}
                />
                <h3 className={styles.name}>{user.login}</h3>
                <span className={styles.contributions}>
                  {user.contributions} contribution{user.contributions !== 1 ? 's' : ''}
                </span>
              </a>
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
}
