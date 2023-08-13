import Image from 'next/image'
import styles from '../styles/brideAndBroom.module.css'


const BrideAndGroom = () => {
  return (
    <section className={styles.noivos}>
      <div className={styles.titleNoivos}>
        <h1>Os Noivos</h1>
      </div>
      <div className={styles.aee}>
        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
        <div className={styles.names}>
        <h1>Erick</h1>
        <h1>&</h1>
        <h1>Alana</h1>
        </div>

        <Image
          src="/images/IMG-20230122-WA0020.jpg"
          alt="Foto de Alana e Erick"
          width={300}
          height={300}
          className={styles.eea}
        />
      </div>
      <div className={styles.textAbout}>
        <p>Criamos esse site para compartilhar com vocês os detalhes do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!
        </p>
      </div>
    </section>
  )
}

export default BrideAndGroom