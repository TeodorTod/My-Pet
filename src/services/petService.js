import { request } from "./requester";

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request(`${baseUrl}/pets`);

export const create = async (petData, token) => {
    let res = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...petData, likes: []})
    });

    let data = await res.json();
    
    return data;
}

export const getOne = async(petId) => {
    let res = await fetch(`${baseUrl}/pets/${petId}`)
    let data = await res.json();

    return data;
}

export const destroy = (petId, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        },
    }).then(res => res.json());
};