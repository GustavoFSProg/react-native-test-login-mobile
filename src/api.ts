import axios from 'axios'

const api = axios.create({
    baseURL: "https://blog-sieley-api-mongodb.vercel.app/"
})

export default api