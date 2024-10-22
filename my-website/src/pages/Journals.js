import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css'; // Optional CSS Styling

export default function References() {
  return (
    <Layout title="References and Publications">
      <div className={styles.container}>
        <h1 className={styles.header}>References and Publications</h1>

        <section className={styles.section}>
          <h2>📑 Conference Papers and Journals</h2>
          <ul className={styles.referenceList}>
            <li>
              <strong>M. Gramuglia, G. M. Kumar, and A. L'Afflitto</strong><br />
              <em>Two-Layer Adaptive Funnel MRAC with Applications to the Control of Multi-Rotor UAVs,</em> 
              2024 13th International Workshop on Robot Motion and Control (RoMoCo), Poznań, Poland, 2024, pp. 31-36.
            </li>
            <li>
              <strong>M. Gramuglia, G. M. Kumar, and A. L'Afflitto</strong><br />
              <em>A Hybrid Model Reference Adaptive Control System for Multi-Rotor Unmanned Aerial Vehicles,</em> 
              AIAA SCITECH 2024 Forum, 2024.
            </li>
            <li>
              <strong>J. A. Marshall, G. I. Carter, and A. L'Afflitto</strong><br />
              <em>Model Reference Adaptive Control for Prescribed Performance and Longitudinal Control of a Tail-Sitter UAV,</em> 
              AIAA SCITECH 2024 Forum, 2023.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>📚 Books</h2>
          <ul className={styles.referenceList}>
            <li>
              <strong>E. Lavretsky and K. Wise</strong><br />
              <em>Robust and Adaptive Control: With Aerospace Applications,</em> London, UK: Springer, 2012.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>🔗 Useful Links</h2>
          <ul className={styles.linkList}>
            <li>
              <a href="https://www.aiaa.org/scitech" target="_blank" rel="noopener noreferrer">
                AIAA SCITECH Forum
              </a>
            </li>
            <li>
              <a href="https://link.springer.com" target="_blank" rel="noopener noreferrer">
                Springer - Robust and Adaptive Control
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
