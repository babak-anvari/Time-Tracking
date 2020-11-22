import axios from 'axios';
import { handleResponse, handleError } from './apiUtils'

const baseUrl = process.env.API_URL + '/timesheet'

export const getTimesheet = () => {
    return axios({
        method: 'get',
        url: baseUrl,
    })
        .then(handleResponse)
        .catch(handleError)
}