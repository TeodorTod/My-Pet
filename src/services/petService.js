const baseUrl = 'http://softuni-server-node.herokuapp.com/jsonstore'

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`)

    let pets = await response.json();

    let result = Object.values(pets)

    return result; 
};

export const create = async (petData) => {
    let res = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(petData)
    });

    let data = await res.json();
    
    return data;
}

export const getOne = async(petId) => {
    let res = await fetch(`${baseUrl}/pets/${petId}`)
    let data = await res.json();

    return data;
}