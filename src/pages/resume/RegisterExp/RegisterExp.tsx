import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './RegisterExp.module.css';
import Input from '../../../components/forms/Input';
import Textarea from '../../../components/forms/Textarea';
import Select from '../../../components/forms/Select';
import Button from '../../../components/common/Button';
import Title from '../../../components/common/Title';

import { Experience, createOrUpdateExperience } from '../../../services/experienceService';

const RegisterExp: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const experience = location.state as Experience;
    
    const initialValues: Experience = {
        id: 0,
        title: '',
        type: '',
        place: '',
        initialYear: '',
        finalYear: '',
        description: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Campo obrigatório'),
        type: Yup.string().required('Campo obrigatório'),
        place: Yup.string().required('Campo obrigatório'),
        initialYear: Yup.number().required('Campo obrigatório').typeError('Um número é obrigatório'),
        finalYear: Yup.number().required('Campo obrigatório').typeError('Um número é obrigatório'),
        description: Yup.string()
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
                        <Title>Cadastrar Experiência</Title>
                        
                        <Input                       
                            label='Título'
                            name='title'
                            errors={errors.title}
                            touched={touched.title}
                        />

                        <Select
                            label='Tipo de experiência'
                            name='type'
                            options={[
                                { value: 'Profissional', label: 'Profissional' },
                                { value: 'Acadêmica', label: 'Acadêmica' },
                            ]}
                            errors={errors.type}
                            touched={touched.type}
                        />

                        <Input                       
                            label='Empresa/Instituição'
                            name='place'
                            errors={errors.place}
                            touched={touched.place}
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

                        <Textarea
                            label='Descrição'
                            name='description'
                            errors={errors.description}
                            touched={touched.description}
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

export default RegisterExp;