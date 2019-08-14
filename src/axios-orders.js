import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-7c76e.firebaseio.com/'
})

export default instance;