import api from './api';

export interface Infos { // Este objeto será importado para api.ts
    id: number;
    photo: string;
    name: string;
    role: string;
    briefing: string;
}

// Métodos CRUD

// export async function createInfos(infos: Infos): Promise<Infos> {
//     const response = await api.post<Infos>('infos/1', infos);
//     return response.data;
// }

export async function getInfos(): Promise<Infos> {
    const response = await api.get<Infos>('infos/1');
    return response.data;
}

export async function updateInfos(infos: Infos): Promise<Infos> {
    const response = await api.put<Infos>('infos/1', infos);
    return response.data;
}

export async function deleteInfos(): Promise<Infos> {
    const response = await api.delete<Infos>('infos/1');
    return response.data;
}

// export: exportando função para ser utilizada pela página RegisterInfos
// async:  