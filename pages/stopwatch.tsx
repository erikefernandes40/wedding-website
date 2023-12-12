import styles from '../styles/stopwatch.module.css'
import { useState, useEffect } from 'react';
import Image from 'next/image'


const Stopwatch = () => {
  const targetDate = new Date('2023-10-14T17:00:00');

  const [diffDays, setDiffDays] = useState(0);
  const [diffHours, setDiffHours] = useState(0);
  const [diffMinutes, setDiffMinutes] = useState(0);
  const [diffSeconds, setDiffSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const diffTime = Math.abs(Number(targetDate) - Number(today));
      const newDiffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const newDiffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newDiffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const newDiffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      setDiffDays(Number(newDiffDays));
      setDiffHours(Number(newDiffHours));
      setDiffMinutes(Number(newDiffMinutes));
      setDiffSeconds(Number(newDiffSeconds));

      if (diffTime <= 0) {
        clearInterval(interval);
      }
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.stopwatch}>
      <div className={styles.regressiveCountDays}>
        <h3>14 DE OUTUBRO DE 2023</h3>
        <h2>
          Itajubá MG
        </h2>
        <h2>
          Igreja Presbiteriana de Vila Rubens, às 17h.
        </h2>
        <h3>Dias Casados</h3>
      </div>
      <div className={styles.main}>
        <div className={styles.regressive}>
          <h3>{diffDays}</h3>
          <h3>DIAS</h3>
        </div>
        <div className={styles.regressive}>
          <h3>{diffHours}</h3>
          <h3>HORAS</h3>
        </div>
        <div className={styles.regressive}>
          <h3>{diffMinutes}</h3>
          <h3>MIN</h3>
        </div>
        <div className={styles.regressive}>
          <h3>{diffSeconds}</h3>
          <h3>SEG</h3>
        </div>
      </div>
      <div className={styles.greenFlower}>
      <Image
          src="/images/green-flower.png"
          alt="Foto de Alana e Erick"
          width={600}
          height={200}
          className={styles.flower}
        />
      </div>

    </section>
  );
};

export default Stopwatch;
