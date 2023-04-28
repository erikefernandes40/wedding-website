import Formulario from './form'
import Header from './header'
import Background from './backgound'
import Stopwatch from './stopwatch'
import BrideAndGroom from './brideAndGroom'
import GodParents from './godParents'
import PresentList from './presentList'
export default function Home() {
  return (
    <>
    <Header />
    <Background/>
    <Stopwatch/>
    <BrideAndGroom/>
    <GodParents/>
    <PresentList/>





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
