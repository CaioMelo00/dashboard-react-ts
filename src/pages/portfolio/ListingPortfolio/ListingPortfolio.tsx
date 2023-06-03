import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './ListingPortfolio.module.css';

import { Portfolio, deletePortfolio, getPortfolio } from '../../../services/portfolioService';


const ListingPortfolio: React.FC = () => {

    const navigate = useNavigate();

    const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

    const fetchPortfolios = async () => {
        try {
            const portfolio = await getPortfolio();
            setPortfolio(portfolio);
        } catch (error) {
            console.log('Erro ao buscar esperiências', error);
            alert('Não foi possível encontrar a experiência');
        }
    };

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const handleEdit = (portfolio: Portfolio) => {
        navigate('/portfolio/register', { state: portfolio });
    };

    const handleDelete = async (id: number) => {
        try {
            await deletePortfolio(id);
            fetchPortfolios();
            alert('Portfólio excluído com sucesso!');
        } catch (error) {
            console.log('Erro ao excluir portfólio', error);
            alert('Ocorreu um erro ao excluir a portfólio');
        }
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {portfolio.map((itemPortfolio, index) => (
                    <tr key={index}>
                        <td>{itemPortfolio.title}</td>
                        <td><img src={itemPortfolio.image} alt={itemPortfolio.title} className={styles.image} /></td>
                        <td><a href={itemPortfolio.link} target="_blank" rel="noopener noreferrer">{itemPortfolio.link}</a></td>
                        <td>
                            <button onClick={() => handleEdit(itemPortfolio)}>Editar</button>
                            <button onClick={() => handleDelete(itemPortfolio.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListingPortfolio;