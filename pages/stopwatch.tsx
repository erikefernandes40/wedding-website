import styles from '../styles/stopwatch.module.css'
import { useState, useEffect } from 'react';

const Stopwatch = () => {
  const targetDate = new Date('2023-10-14T00:00:00');

  const [diffDays, setDiffDays] = useState(0);
  const [diffHours, setDiffHours] = useState(0);
  const [diffMinutes, setDiffMinutes] = useState(0);
  const [diffSeconds, setDiffSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const diffTime = Math.abs(targetDate - today);
      const newDiffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const newDiffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newDiffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const newDiffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      setDiffDays(newDiffDays);
      setDiffHours(newDiffHours);
      setDiffMinutes(newDiffMinutes);
      setDiffSeconds(newDiffSeconds)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.stopwatch}>
      <div className={styles.regressiveCountDays}>
        <h3>CONTAGEM REGRESSIVA PARA O GRANDE DIA</h3>
      </div>
      <div className={styles.countRegressiveDays}>
        <h3>{diffDays}</h3>
        <h3>{diffHours}</h3>
        <h3>{diffMinutes}</h3>
        <h3>{diffSeconds}</h3>
      </div>
      <div className={styles.time}>
        <h3>DIAS</h3>
        <h3>HORAS</h3>
        <h3>MINUTOS</h3>
        <h3>SEGUNDOS</h3>
      </div>
    </section>
  );
};

export default Stopwatch;
