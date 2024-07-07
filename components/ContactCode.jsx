import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'chi.xing@liverpool.ac.uk',
    href: 'mailto:chixing@liverpool.ac.uk',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/chi-xing',
    href: 'https://www.linkedin.com/in/chi-xing-b3006b254/',
  },
  {
    social: 'GitHub',
    link: 'github.com/MartinRepo',
    href: 'https://github.com/MartinRepo',
  },
  {
    social: 'Website',
    link: 'martinspace.top',
    href: 'https://martinspace.top',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       struct <a>contactChi</a> &#123;
        </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>
        &#125;
      </p>
      <p className={styles.line}>
      </p>
    </div>
  );
};

export default ContactCode;
