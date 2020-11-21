import axios from 'axios';

export const getTimesheet = async () => {
    let response = await axios({
        method: 'get',
        url: 'http://localhost:7777/timesheet',
        //add header here later
        //add params here later
    })
    return response.data;
}