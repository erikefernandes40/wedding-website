import { useFormik } from 'formik';
import styles from 'styles/form.module.css';

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
    <form className={styles.formulario} onSubmit={formik.handleSubmit}>
      <div>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nome}
      />
      </div>

      <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      </div>

    <div>
    <label htmlFor="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        name="mensagem"
        onChange={formik.handleChange}
        value={formik.values.mensagem}
      />
    </div>


      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
