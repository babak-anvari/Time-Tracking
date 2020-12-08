import axios from 'axios';
import { handleResponse, handleError } from './apiUtils'

const baseUrl = process.env.API_URL + '/user/login'

export const userLogin = (user) => {
    return axios({
        method: 'post',
        url: baseUrl,
        data: {
            email: user.email,
            password: user.password
        }
    })
        .then(handleResponse)
        .catch(handleError)
}