// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Heading from '@theme/Heading';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // FontAwesome icons
import Heading from '@theme/Heading';
import styles from './index.module.css'; // Merged CSS module

function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageFeatures />
        <div className={styles.container}>
          <header className={styles.heroBanner}>
            <img src="img/govind3.jpg" alt="Govind" className={styles.profilePicture}/>
            <h1>Govind Tuli</h1>
            <p>I am a final year student at BITS Pilani, with a passion for ML and robotics.</p>
            <div className={styles.socialLinks}>
              <Link to="https://www.linkedin.com/in/govind-tuli-383880202/" className={styles.socialButton}>
                <FaLinkedin /> LinkedIn
              </Link>
              <Link to="https://github.com/govindtuli" className={styles.socialButton}>
                <FaGithub /> GitHub
              </Link>
            </div>
          </header>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
