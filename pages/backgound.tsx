import styles from 'styles/backgound.module.css'
import Image from 'next/image'


const Background = () => {
  return (
    <section className={styles.background}>
      <div className={styles.imagemPrincipal}>
        <div>
          <Image
            src="/images/line_top.png"
            alt="Foto de Alana e Erick"
            width={250}
            height={40}
            className={styles.lineTop}
          />
        </div>

        <div>
          <h1>Alana & Erick</h1>
        </div>

        <div>
          <Image
            src="/images/line_bottom.png"
            alt="Foto de Alana e Erick"
            width={250}
            height={40}
            className={styles.lineBottom}
          />
        </div>
      </div>
    </section>
  )
}

export default Background