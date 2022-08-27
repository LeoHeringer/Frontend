import axios from "axios"
import utilsStorage from '../utils/storage'

const api = axios.create({
  baseURL: 'https://ensolucoes.com/backend/public/api'
});

api.interceptors.request.use((config) => {
  let token = utilsStorage.obterTokenNaStorage();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  console.log(token)
  return config;
});

export default api