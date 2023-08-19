import styles from 'styles/backgound.module.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import Image from 'next/image';

const Background = () => {
  return (
<section className={styles.section}>
      <Carousel swipeable={false} autoPlay interval={3000} infiniteLoop>
        <div>
        <div className={styles.imagemPrincipal}>
          <Image
                src="/images/Alana e Erick - Pré Wedding-204.jpg"
                alt="Erick & Alana"
                fill={true}
                priority={true}
                style={{
                  objectFit: 'cover',
                }}
                loading='eager'
                
              />
            <h1>Erick & Alana</h1>
          </div>
        </div>
        <div>
          <div className={styles.imagemPrincipal2}>
          <Image
                src="/images/Alana e Erick - Pré Wedding-244.jpg"
                alt="Erick & Alana"
                fill={true}
                priority={true}
                style={{
                  objectFit: 'cover',
                }}
                loading='eager'
                className={styles.image}
              />
            <h1>Ela disse Sim !</h1>
          </div>
        </div>
        <div>
          <div className={styles.imagemPrincipal3}>
          <Image
                src="/images/Alana e Erick - Pré Wedding-250.jpg"
                alt="Erick & Alana"
                fill={true}
                priority={true}
                style={{
                  objectFit: 'cover',
                }}
                loading='eager'
                className={styles.image}
              />
            <h1>Nosso pra sempre</h1>
          </div>
        </div>
      </Carousel>
    </section>
  )
}

export default Background