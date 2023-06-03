import React from 'react';

import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './RegisterPortfolio.module.css';
import Input from '../../../components/forms/Input';
import Button from '../../../components/common/Button';
import Title from '../../../components/common/Title';

import { Portfolio, createOrUpdatePortfolio } from '../../../services/portfolioService';


const RegisterPortfolio: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const portfolio = location.state as Portfolio;

    const initialValues: Portfolio = {
        id: 0,
        title: '',
        image: '',
        link: ''
    };

    const validationSchema = Yup.object().shape({
        link: Yup.string().required('Campo obrigatório'),
        image: Yup.string().required('Campo obrigatório'),
        title: Yup.string().required('Campo obrigatório')
    });

    const onSubmit = async (values: Portfolio, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdatePortfolio(values);
            console.log(values);
            resetForm();
            navigate('/portfolio/listing');
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao enviar o formulário');
        }
    };

    return (
        <div className={styles.formWrapper}>
            <Formik 
                initialValues={portfolio || initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <Title>Cadastrar Portfólio</Title>
                        
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

                        <Button 
                            type='submit'
                        >
                            Salvar
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterPortfolio;