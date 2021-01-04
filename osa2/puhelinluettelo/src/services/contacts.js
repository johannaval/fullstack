import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        return response.data
    })
}
const delet = (id) => {
    console.log('täällä toimii 500000')

    return axios.delete(`${baseUrl}/${id}`);
}

const create = newObject => {
    const request = axios.post(`${baseUrl}`, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    delet: delet,
    create: create,
    update: update
}
