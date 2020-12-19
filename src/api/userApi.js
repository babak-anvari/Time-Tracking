import axios from 'axios';
import handleApiResponse from './handleApiResponse'
import handleApiError from './handleApiError'

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
        .then(handleApiResponse)
        .catch(handleApiError)
}