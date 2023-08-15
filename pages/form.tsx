import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import styles from 'styles/form.module.css';
import Image from 'next/image'

const Formulario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      mensagem: ''
    },
    onSubmit: (values) => {
      console.log(values);
      setIsModalOpen(true);
    }
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      formik.resetForm();
    }
  }, [isModalOpen]);

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

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Formulário enviado com sucesso!</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Formulario;
