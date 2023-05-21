import React from 'react';

import { Formik, Form} from 'formik';
import * as Yup from 'yup';

import styles from './RegisterPortfolio.module.css';
import Input from '../../../components/forms/Input';

interface FormValues { // objeto
    title: string
    image: string;
    link: string;
}

const RegisterPortfolio: React.FC = () => {

    const initialValues: FormValues = {
        title: '',
        image: '',
        link: ''
    };

    const validationSchema = Yup.object().shape({
        link: Yup.string().required('Campo obrigatório'),
        image: Yup.string().required('Campo obrigatório'),
        title: Yup.string().required('Campo obrigatório')
    });

    const onSubmit = (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        // Lógica de envio para o backend
        console.log(values);
        resetForm();
        alert('Formulário enviado com sucesso!')
    };

    return (
        <div className={styles.formWrapper}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastrar Portfólio</h2>
                        
                        <Input                       
                            label='Título'
                            name='title'
                            errors={errors.title}
                            touched={touched.title}
                        />

                        <Input
                            label='Imagem'
                            name='image'
                            errors={errors.image}
                            touched={touched.image}
                        />

                        <Input
                            label='Link'
                            name='link'
                            errors={errors.link}
                            touched={touched.link}
                        />

                        <button type='submit' className={styles.button}>Salvar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterPortfolio;