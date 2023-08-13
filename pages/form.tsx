import { useFormik } from 'formik';
import styles from 'styles/form.module.css';
import Image from 'next/image'


const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      mensagem: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <section className={styles.form}>
      <form className={styles.formulario} onSubmit={formik.handleSubmit}>
        <h2>Deixe seu recado para os noivos</h2>

        <div>
          <label htmlFor="nome"></label>
          <input
            id="nome"
            name="nome"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nome}
            placeholder='Nome'
          />
        </div>

        <div>
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder='Email'
            
          />
        </div>

        <div>
          <label htmlFor="mensagem"></label>
          <textarea
            id="mensagem"
            name="mensagem"
            onChange={formik.handleChange}
            value={formik.values.mensagem}
            placeholder='Mensagem'
          />
        </div>


        <button type="submit">Enviar</button>
      </form>

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

export default Formulario;
