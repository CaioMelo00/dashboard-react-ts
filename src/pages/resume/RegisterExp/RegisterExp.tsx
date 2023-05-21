import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './RegisterExp.module.css';
import Input from '../../../components/forms/Input';
import Textarea from '../../../components/forms/Textarea';
import Select from '../../../components/forms/Select';

import { Experience, createOrUpdateExperience } from '../../../services/experienceService';


const RegisterExp: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const experience = location.state as Experience;
    
    const initialValues: Experience = {
        id: 0,
        title: '',
        description: '',
        type: '',
        initialYear: '',
        finalYear: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Campo obrigatório'),
        description: Yup.string(),
        type: Yup.string().required('Campo obrigatório'),
        initialYear: Yup.number().required('Campo obrigatório').typeError('Um número é obrigatório'),
        finalYear: Yup.number().required('Campo obrigatório').typeError('Um número é obrigatório'),
    });

    const onSubmit = async (values: Experience, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdateExperience(values);
            console.log(values);
            resetForm();
            navigate('/resume/experiences/listing');
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao enviar o formulário');
        }
    };

    return (
        <div className={styles.formWrapper}>
            <Formik 
                initialValues={experience || initialValues}
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <h2 className={styles.title}>Cadastrar Experiência</h2>
                        
                        <Input                       
                            label='Título'
                            name='title'
                            errors={errors.title}
                            touched={touched.title}
                        />

                        <Input
                            label='Ano Início'
                            name='initialYear'
                            errors={errors.initialYear}
                            touched={touched.initialYear}
                        />

                        <Input
                            label='Ano Fim'
                            name='finalYear'
                            errors={errors.finalYear}
                            touched={touched.finalYear}
                        />

                        <Select
                            label='Tipo de experiência'
                            name='type'
                            options={[
                                { value: 'Profissional', label: 'Profissional' },
                                { value: 'Acadêmico', label: 'Acadêmico' },
                            ]}
                            errors={errors.type}
                            touched={touched.type}
                        />

                        <Textarea
                            label='Descrição'
                            name='description'
                            errors={errors.description}
                            touched={touched.description}
                        />

                        <button type='submit' className={styles.button}>Salvar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterExp;