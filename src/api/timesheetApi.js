import axios from 'axios';
import handleApiResponse from './handleApiResponse'
import handleApiError from './handleApiError'

const baseUrl = process.env.API_URL + '/timesheet/'

export const getTimesheet = (weekEnd) => {
    return axios({
        method: 'get',
        url: baseUrl,
        params: {
            weekEnd,
            userId: JSON.parse(localStorage.getItem('user'))._id
        }
    })
        .then(handleApiResponse)
        .catch(handleApiError)
}

export const saveTimesheet = (timesheet) => {
    return axios({
        method: timesheet._id ? 'put' : 'post',
        url: baseUrl,
        data: timesheet
    })
        .then(handleApiResponse)
        .catch(handleApiError)
}