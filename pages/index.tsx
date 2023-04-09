import Image from 'next/image'
import Formulario from './form'
export default function Home() {
  return (
    <>
      <header>
        <div className='logo'>
          <h1>
            A & E
          </h1>
        </div>
        <div className='menu'>
          <img src="https://cdn-icons-png.flaticon.com/512/3502/3502458.png" alt="menu" />
        </div>
      </header>

      <section className='background'>
        <div className="imagem-principal">
          <h1>Alana & Erick</h1>
          <h3>14/03/2023</h3>
        </div>
      </section>

      <section className="stopwatch">
        <div className="regressive-count-text">
          <h3>CONTAGEM REGRESSIVA PARA O GRANDE DIA</h3>
        </div>
        <div className="count-regressive-days">
          <h3>200</h3>
          <h3>09</h3>
          <h3>15</h3>
        </div>
        <div className="time">
          <h3>DIAS</h3>
          <h3>HORAS</h3>
          <h3>MINUTOS</h3>
        </div>
      </section>

      <section className="noivos">
        <div className="title-noivos">
          <h2>Os Noivos</h2>
        </div>
        <div className="aee">
          <h1>Erick</h1>
          <Image
            src="/images/IMG-20230122-WA0020.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className='eea'
          />
          <h1>Alana</h1>
        </div>
        <div className='text-about'>
          <p>Criamos esse site para compartilhar com vocês os detalhes do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!
          </p>
        </div>
      </section>

      <section className='padrinhos'>
        <h2>Os Padrinhos</h2>

        <div className='padrinhos-wrap'>
          <h3>Erick</h3>
          <Image
            src="/images/IMG-20230122-WA0020.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className='eea'
          />
          <Image
            src="/images/IMG-20230122-WA0020.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className='eea'
          />
          <h3>Alana</h3>
        </div>
        <div className='padrinhos-wrap'>
          <h3>Erick</h3>
          <Image
            src="/images/IMG-20230122-WA0020.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className='eea'
          />
          <Image
            src="/images/IMG-20230122-WA0020.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className='eea'
          />
          <h3>Alana</h3>
        </div>      <div className='padrinhos-wrap'>
          <h3>Erick</h3>
          <Image
            src="/images/IMG-20230122-WA0020.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className='eea'
          />
          <Image
            src="/images/IMG-20230122-WA0020.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className='eea'
          />
          <h3>Alana</h3>
        </div>
        <div className='padrinhos-wrap'>
          <h3>Erick</h3>
          <Image
            src="/images/IMG-20230122-WA0020.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className='eea'
          />
          <Image
            src="/images/IMG-20230122-WA0020.jpg"
            alt="Foto de Alana e Erick"
            width={300}
            height={300}
            className='eea'
          />
          <h3>Alana</h3>
        </div>
      </section>

      <section className='present-list'>
        <h1>Lista de presentes</h1>
        <a href="https://www.finalfeliz.de/alana-erickk">Clique aqui</a>
        <div className='money'>
          <div>
            <h2>Toma aqui uns 50 reais</h2>
            <Image
              src="/images/naiara-azevedo.jpg"
              alt="Foto de Alana e Erick"
              width={300}
              height={300}
              className='money-image'
            />
            <h3>R$ 50,00</h3>
          </div>
          <div>
            <h2>Vaquinha</h2>
            <Image
              src="/images/vaquinha.png"
              alt="Foto de Alana e Erick"
              width={300}
              height={300}
              className='money-image'
            />
            <h3>R$ 30,00</h3>
          </div>
          <div>
            <h2>Roupa para a noiva usar na lua de mel</h2>
            <Image
              src="/images/langerie.webp"
              alt="Foto de Alana e Erick"
              width={300}
              height={300}
              className='money-image'
            />
            <h3>R$ 100,00</h3>
          </div>
          <div>
            <h2>Só para não dizer que não dei nada</h2>
            <Image
              src="/images/20-reais.jpg"
              alt="Foto de Alana e Erick"
              width={300}
              height={300}
              className='money-image'
            />
            <h3>R$ 20,00</h3>
          </div>
          <div>
            <h2>Rolo de massa para a noiva usar quando necessário</h2>
            <Image
              src="/images/rolo-de-massa.jpg"
              alt="Foto de Alana e Erick"
              width={300}
              height={300}
              className='money-image'
            />
            <h3>R$ 30,00</h3>
          </div>
          <div>
            <h2>Ajude os noivos em sua viajem de lua de mel</h2>
            <Image
              src="/images/recem-casados.jpg"
              alt="Foto de Alana e Erick"
              width={300}
              height={300}
              className='money-image'
            />
            <h3>R$ 100,00</h3>
          </div>
        </div>

        <div>
          <h2>Gostaria de contibuir com outro valor? </h2>
          <div className='pix'>
            <h2>Pix</h2>
            <Image
              src="/images/qr-code.png"
              alt="Foto de Alana e Erick"
              width={300}
              height={300}
              className='qr-code-image'
            />
          </div>
        </div>
      </section>

      <section className='cerimonia'>
        <h1>Cerimônia</h1>
        <p>Nossa Cerimônia será no dia 14/10/2023, na Igreja Presbiteriana do Bairro Vila Rubens, começará às 17h.
        </p>

        <h2>Deixe seu recado para os noivos</h2>

        <Formulario />

      </section>

    </>

  )
}
