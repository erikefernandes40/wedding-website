import { useState } from 'react';
import styles from 'styles/header.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        A&E
      </div>

      <button className={styles.menuIcon} onClick={handleToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <ScrollLink
              className={styles.link}
              to="os-noivos"
              smooth={true}
              duration={500}
              onClick={handleCloseMenu}
            >
              Os Noivos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className={styles.link}
              to="os-padrinhos"
              smooth={true}
              duration={500}
              onClick={handleCloseMenu}

            >
              Os Padrinhos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className={styles.link}
              to="lista-de-presentes"
              smooth={true}
              duration={500}
              onClick={handleCloseMenu}

            >
              Lista de Presentes
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className={styles.link}
              to="deixe-seu-recado"
              smooth={true}
              duration={500}
              onClick={handleCloseMenu}

            >
              Deixe seu Recado
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;