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

    <section className="main-photo">
      <div className="we-photo"></div>
      <div className="text-photo"></div>
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

    </>

  )
}
