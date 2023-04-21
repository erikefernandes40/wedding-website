import Image from 'next/image'
import styles from '../styles/godParents.module.css'


const GodParents = () => {
  return (
    <section className={styles.godParents}>
      <h2>Os Padrinhos</h2>

      <div className={styles.godParentsWrap}>
        <h3>Erick</h3>
        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
        <h3>Alana</h3>
      </div>
      <div className={styles.godParentsWrap}>
        <h3>Erick</h3>
        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
        <h3>Alana</h3>
      </div>
      <div className={styles.godParentsWrap}>
        <h3>Erick</h3>
        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
        <h3>Alana</h3>
      </div>
      <div className={styles.godParentsWrap}>
        <h3>Erick</h3>
        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
        <h3>Alana</h3>
      </div>
    </section>
  )
}

export default GodParents