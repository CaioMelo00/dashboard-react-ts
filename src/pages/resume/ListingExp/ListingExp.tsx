import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './ListingExp.module.css';

import { Experience, deleteExperience, getExperience } from '../../../services/experienceService';


const ListingExp: React.FC = () => {

    const navigate = useNavigate();

    const [experiences, setExperiences] = useState<Experience[]>([]);

    const fetchExperiences = async () => {
        try {
            const experiences = await getExperience();
            setExperiences(experiences);
        } catch (error) {
            console.log('Erro ao buscar esperiências', error);
            alert('Não foi possível encontrar a experiência');
        }
    };

    useEffect(() => {
        fetchExperiences();
    }, []);

    const handleEdit = (experience: Experience) => {
        navigate('/resume/experiences/register', { state: experience });
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteExperience(id);
            fetchExperiences();
            alert('Experiência excluída com sucesso!');
        } catch (error) {
            console.log('Erro ao excluir experiência', error);
            alert('Ocorreu um erro ao excluir a experiência');
        }
    };
    
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Tipo</th>
                    <th>Empresa/Instituição</th>
                    <th>Ano Início</th>
                    <th>Ano Fim</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {experiences.map((experience, index) => (
                    <tr key={index}>
                        <td>{experience.title}</td>
                        <td>{experience.type}</td>
                        <td>{experience.place}</td>
                        <td>{experience.initialYear}</td>
                        <td>{experience.finalYear}</td>
                        <td>{experience.description}</td>
                        <td>
                            <button onClick={() => handleEdit(experience)}>Editar</button>
                            <button onClick={() => handleDelete(experience.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListingExp;