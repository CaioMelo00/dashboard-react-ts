import React, { useState } from 'react';

import styles from './ListingPortfolio.module.css';

interface Portfolio {
    link: string;
    image: string;
    title: string;
};

const ListingPortfolio: React.FC = () => {

    const [portfolio, setPortfolio] = useState<Portfolio[]>([
        {
            link: 'https://academy.comeialabs.com.br/',
            image: 'https://i.imgflip.com/6woq7y.jpg',
            title: 'Portfolio 1'
        },
        {
            link: 'https://academy.comeialabs.com.br/',
            image: 'https://i.imgflip.com/28wmke.jpg',
            title: 'Portfolio 2'
        },
        {
            link: 'https://academy.comeialabs.com.br/',
            image: 'https://media.tenor.com/vDUm8YSvB6QAAAAC/noice-meme.gif',
            title: 'Portfolio 3'
        }
    ]);

    const handleEdit = (index: number) => {
        // lógica para lidar com a edição do item de índice 'index'
    };
    
    const handleDelete = (index: number) => {
        // lógica para lidar com a edição do item de índice 'index'
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
                            <button onClick={() => handleEdit(index)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListingPortfolio;