import styles from 'styles/header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          A & E
        </h1>
      </div>

      <div>
        <img className={styles.headerImg} src="https://cdn-icons-png.flaticon.com/512/3502/3502458.png" alt="menu" />
      </div>
    </header>

  )
}

export default Header;