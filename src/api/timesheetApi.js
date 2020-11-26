import axios from 'axios';
import { handleResponse, handleError } from './apiUtils'

const baseUrl = process.env.API_URL + '/timesheet/'

export const getTimesheet = () => {
    return axios({
        method: 'get',
        url: baseUrl,
        params: {
            weekEnd: '2020-09-30',
            userId: '5f5c080d01b43d9958fe2d54'
        }
    })
        .then(handleResponse)
        .catch(handleError)
}