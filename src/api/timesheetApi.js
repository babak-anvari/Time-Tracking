import axios from 'axios';
import { handleResponse, handleError } from './apiUtils'

const baseUrl = process.env.API_URL + '/timesheet/'

export const getTimesheet = () => {
    return axios({
        method: 'get',
        url: baseUrl,
        params: {
            weekEnd: Date.parse('2020-09-26'),
            userId: '5f5c080d01b43d9958fe2d54'
        }
    })
        .then(handleResponse)
        .catch(handleError)
}

export const saveTimesheet = (tasks) => {
    return axios({
        // method: timesheet.id ? 'put' : 'post',
        method: 'post',
        url: baseUrl,
        data: tasks
    })
        .then(handleResponse)
        .catch(handleError)
}