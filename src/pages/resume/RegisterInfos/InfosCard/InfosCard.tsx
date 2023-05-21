import React from 'react';

import styles from './InfosCard.module.css'
import { Infos } from '../../../../services/infosService';


interface InfosCardProps {
    infos: Infos;
}

const InfosCard: React.FC<InfosCardProps> = ({ infos }) => {
    const { photo, name, role, briefing } = infos;

    return (
        <div className={styles.card}>
            <img src={photo} alt={`${name}'s photo`} className={styles.photo} />
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
                <p className={styles.briefing}>{briefing}</p>
            </div>
        </div>
    );
};

export default InfosCard;