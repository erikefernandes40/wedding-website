import Image from 'next/image'
import styles from '../styles/presentList.module.css'


const PresentList = () => {
  return (
    <section id='lista-de-presentes' className={styles.presentList}>
      <h1>Para acessar nossa lista de presentes</h1>
      <a className={styles.listaDePresentes} href="https://www.finalfeliz.de/alana-erickk">Clique aqui</a>
      <div className={styles.money}>
        <div>
          <h2>Toma aqui uns 50 reais</h2>
          <a href="https://www.vakinha.com.br/vaquinha/casamento-erick-e-alana">
          <Image
            src="/images/naiara-azevedo.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className={styles.moneyImage}
          />
          <h3>R$ 50,00</h3>
          </a>
        </div>
        <div>
          <h2>Vaquinha</h2>
          <a href="https://www.vakinha.com.br/vaquinha/casamento-erick-e-alana">
            <Image
              src="/images/vaquinha.png"
              alt="Foto de Alana e Erick"
              width={300}
              height={300}
              className={styles.moneyImage}
            />
          <h3>R$ 30,00</h3>
          </a>
        </div>
        <div>
          <h2>Roupa para a noiva usar na lua de mel</h2>
          <a href="https://www.vakinha.com.br/vaquinha/casamento-erick-e-alana">
          <Image
            src="/images/langerie.webp"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className={styles.moneyImage}
          />
          <h3>R$ 100,00</h3>
          </a>
        </div>
        <div>
          <h2>Só para não dizer que não dei nada</h2>
          <a href="https://www.vakinha.com.br/vaquinha/casamento-erick-e-alana">
          <Image
            src="/images/20-reais.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className={styles.moneyImage}
          />
          <h3>R$ 20,00</h3>
          </a>
        </div>
        <div>
          <h2>Rolo de massa para a noiva usar quando necessário</h2>
          <a href="https://www.vakinha.com.br/vaquinha/casamento-erick-e-alana">
          <Image
            src="/images/rolo-de-massa.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className={styles.moneyImage}
          />
          <h3>R$ 30,00</h3>
          </a>
        </div>
        <div>
          <h2>Ajude os noivos em sua viajem de lua de mel</h2>
          <a href="https://www.vakinha.com.br/vaquinha/casamento-erick-e-alana">
          <Image
            src="/images/recem-casados.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className={styles.moneyImage}
          />
          <h3>R$ 100,00</h3>
          </a>
        </div>
      </div>

      <div>
        <h2 className={styles.value}>Gostaria de contribuir com outro valor? </h2>
        <div className={styles.pix}>
          <h2>Pix</h2>
          <Image
            src="/images/qr-code.png"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className={styles.qrCodePix}
          />
        </div>
        <div className={styles.qrCode}>
          <h2>Escaneie a imagem acima </h2>
          <h2> ou </h2>
          <h2> copie a chave pix abaixo</h2>
          <h1>a798c85a-e7f0-4270-b658-c49729585a78</h1>
        </div>
      </div>
    </section>
  )
}

export default PresentList