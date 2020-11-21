import axios from 'axios';

const baseUrl = process.env.API_URL + '/timesheet'


export const getTimesheet = async () => {
    return (await axios({
        method: 'get',
        url: baseUrl,
        //add header here later
        //add params here later
    })).data;
}