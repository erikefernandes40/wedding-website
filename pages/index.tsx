import Image from 'next/image'
import Formulario from './form'
import Header from './header'
import Background from './backgound'
import Stopwatch from './stopwatch'
import BrideAndGroom from './brideAndGroom'
export default function Home() {
  return (
    <>
    <Header />
    <Background/>
    <Stopwatch/>
    <BrideAndGroom/>



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
