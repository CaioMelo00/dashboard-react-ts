import api from './api';

export interface Experience { // Este objeto será importado para api.ts
    id: number;
    title: string,
    type: string,
    place: string,
    initialYear: string,
    finalYear: string,
    description: string,
}

// CRUD

export const createExperience = async (experience: Experience) => {
    const response = await api.post('/experiences', experience);
    return response.data;
}

export const getExperience = async () => {
    const response = await api.get('/experiences');
    return response.data;
}

export const getExperienceById = async (id: number) => {
    const response = await api.get(`/experiences/${id}`);
    return response.data;
}

export const updateExperience = async (experience: Experience) => {
    const response = await api.put(`/experiences/${experience.id}`, experience);
    return response.data;
}

export const deleteExperience = async (id: number) => {
    const response = await api.delete(`/experiences/${id}`);
    return response.data;
}

export const createOrUpdateExperience = async (experience: Experience) => {
    if (experience.id === 0) {
        return await createExperience(experience);
    } else {
        return await updateExperience(experience);
    }
}