import axios from 'axios';
import handleApiResponse from './handleApiResponse'
import handleApiError from './handleApiError'
import authHeader from '../utils/authHeader';

const baseUrl = process.env.API_URL + '/project'

export const loadProjects = () => {
    return axios({
        method: 'get',
        url: baseUrl,
        headers: authHeader()
    })
        .then(handleApiResponse)
        .catch(handleApiError)
}