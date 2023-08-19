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
    onSubmit: async (values) => {
        const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"
        const message = `nome: ${values.nome},\n email: ${values.email},\n mensagem: ${values.mensagem}`
        const phone1 = "5535991444332"

        await fetch(GZAPPY_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'user_token_id': "d14609f2-3ca0-4395-afc8-a318c396e21c"
          },
          body: JSON.stringify({
            instance_id: "0PKE44V60SGC41Z6DM04RS8F",
            instance_token: "2bd1964a-cd3a-40ba-8e66-430a74821063",
            message: [message],
            phone: phone1, 
          })
        })

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
    <section id='deixe-seu-recado' className={styles.form}>
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
            <p>Sua mensagem foi enviada com sucesso!</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Formulario;
