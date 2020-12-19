import axios from 'axios';
import handleApiResponse from './handleApiResponse'
import handleApiError from './handleApiError'

const baseUrl = process.env.API_URL + '/user/'

export const userLogin = (user) => {
    return axios({
        method: 'post',
        url: baseUrl + '/login',
        data: {
            email: user.email,
            password: user.password
        }
    })
        .then(handleApiResponse)
        .catch(handleApiError)
}

export const createUser = (user) => {
    return axios({
        method: 'post',
        url: baseUrl,
        data: user,
    })
        .then(handleApiResponse)
        .catch(handleApiError)
}