import axios from 'axios';
import { handleResponse, handleError } from './apiUtils'
import authHeader from '../utils/authHeader';

const baseUrl = process.env.API_URL + '/project'

export const loadProjects = () => {
    return axios({
        method: 'get',
        url: baseUrl,
        headers: authHeader()
    })
        .then(handleResponse)
        .catch(handleError)
}