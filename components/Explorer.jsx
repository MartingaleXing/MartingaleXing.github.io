import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'home.jsx',
    path: '/',
    icon: 'react_icon.svg',
  },
  {
    name: 'resume.html',
    path: '/resume',
    icon: 'html_icon.svg',
  },
  {
    name: 'posts.py',
    path: '/posts',
    icon: 'py_icon.svg',
  },
  {
    name: 'articles.go',
    path: '/articles',
    icon: 'go_icon.svg',
  },
  {
    name: 'contact.cpp',
    path: '/contact',
    icon: 'cpp_icon.svg',
  },
  {
    name: 'github.git',
    path: '/github',
    icon: 'git_icon.svg',
  },
  {
    name: 'readme.md',
    path: '/aboutMe',
    icon: 'markdown_icon.svg'
  }
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const router = useRouter();

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={`${styles.file} ${router.pathname === item.path && styles.active}`}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
