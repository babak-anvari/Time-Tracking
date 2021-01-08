import axios from 'axios';
import handleApiResponse from './handleApiResponse'
import handleApiError from './handleApiError'
import authHeader from '../utils/authHeader';

const baseUrl = process.env.API_URL + '/action'

export const loadActions = () => {
    return axios({
        method: 'get',
        url: baseUrl,
        headers: authHeader()
    })
        .then(handleApiResponse)
        .catch(handleApiError)
}

export const saveActions = (actions) => {
    return axios({
        method: actions._id ? 'put' : 'post',
        url: baseUrl,
        headers: authHeader(),
        data: actions
    })
        .then(handleApiResponse)
        .catch(handleApiError)
}