import styles from '../styles/brideAndBroom.module.css'


const BrideAndGroom = () => {
  return (
    <section id='os-noivos' className={styles.noivos}>
      <div className={styles.titleNoivos}>
        <h1>Os Noivos</h1>
      </div>
      <div className={styles.aee}>
        <img className={styles.erick} src="" alt="erick" />
        <div className={styles.names}>
        <h1>Erick</h1>
        <h1>&</h1>
        <h1>Alana</h1>
        </div>
        <img className={styles.alana} src="" alt="Alana"/>

      </div>
      <div className={styles.textAbout}>
        <p>O tão esperado dia está se aproximando com toda a sua grandiosidade e encanto! <br /> <br />

Nossos corações transbordam de alegria e gratidão por cada momento que trilhamos até alcançar este marco tão especial. Queremos expressar nosso profundo agradecimento, especialmente àquelas pessoas preciosas que têm preenchido nossos dias com amor e felicidade, compartilhando conosco essa jornada de emoções.
        </p>
      </div>
    </section>
  )
}

export default BrideAndGroom