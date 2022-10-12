import axios from "axios"


const api = () => {
    return axios.create({
        baseURL: 'http://localhost:3001'
    })
}

export default api
