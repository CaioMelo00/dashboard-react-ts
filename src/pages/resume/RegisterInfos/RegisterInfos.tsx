import React, { useEffect, useState } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from './RegisterInfos.module.css';
import Input from '../../../components/forms/Input';
import Textarea from '../../../components/forms/Textarea';
import { Infos, updateInfos, getInfos } from '../../../services/infosService';
import InfosCard from './InfosCard';
import Button from '../../../components/common/Button';
import Title from '../../../components/common/Title';

const RegisterInfos: React.FC = () => {

    const [infos, setInfos] = useState<Infos>({} as Infos);

    const initialValues: Infos = {
        id: 1,
        photo: '',
        name: '',
        role: '',
        briefing: '',
    };

    const validationSchema = Yup.object().shape({
        photo: Yup.string().required('Campo obrigatório'),
        name: Yup.string().required('Campo obrigatório'),
        role: Yup.string().required('Campo obrigatório'),
        briefing: Yup.string().required('Campo obrigatório'),
    });

    const fetchInfo = async () => {
        try {
            const info = await getInfos();
            setInfos(info)
        } catch (error) {
            console.error('Erro ao buscar informações:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const onSubmit = async (values: Infos, { resetForm }: { resetForm: () => void }) => {
        try {
            await updateInfos(values);
            setInfos(values);
            console.log(values);
            resetForm();
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente!');
        }
    };

    const handleDelete = async () => {
        try {
            await updateInfos(initialValues);
            setInfos(initialValues);
            alert('Informações deletadas com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar as informações:', error);
            alert('Ocorreu um erro ao deletar as informações. Tente novamente');
        }
    };

    return (
        <div className={styles.formWrapper}>
            <Formik 
                initialValues={infos} 
                enableReinitialize={true}
                validationSchema={validationSchema} 
                onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <Title>Cadastrar Informações</Title>

                        <Input 
                            label='Foto'
                            name='photo'
                            errors={errors.photo}
                            touched={touched.photo}
                        />

                        <Input 
                            label='Nome'
                            name='name'
                            errors={errors.name}
                            touched={touched.name}
                        />

                        <Input 
                            label='Cargo'
                            name='role'
                            errors={errors.role}
                            touched={touched.role}
                        />

                        <Textarea 
                            label='Resumo'
                            name='briefing'
                            errors={errors.briefing}
                            touched={touched.briefing}
                        />

                        <Button type='submit'>Salvar</Button>
                    </Form>
                )}
            </Formik>


            {infos &&
                // Verificação se o objeto está vazio
                Object.entries(infos).some(
                    ([key, value]) => key !== 'id' && value.trim() !== ''
                ) && (
                    <div className={styles.cardContainer}>
                        <InfosCard infos={infos} />
                        <Button
                            onClick={handleDelete}
                            red={true}
                        >
                            Deletar
                        </Button>
                    </div>
                )}
        </div>
    );
};

export default RegisterInfos;