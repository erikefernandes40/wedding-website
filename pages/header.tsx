import Link from 'next/link';
import { useState } from 'react';
import styles from 'styles/header.module.css';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          A&E
        </Link>
      </div>

      <button className={styles.menuIcon} onClick={handleToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <Link href="/">
              Os Noivos
            </Link>
          </li>
          <li>
            <Link href="/">
              Os Padrinhos
            </Link>
          </li>
          <li>
            <Link href="/">
              Lista de Presentes
            </Link>
          </li>
          <li>
            <Link href="/">
              Cerimônia
            </Link>
          </li>
          <li>
            <Link href="/contato">
              Deixe seu Recado
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;