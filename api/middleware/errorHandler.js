import { disConnectdb } from '../dataAccess/database';

let errorHandler = (err, req, res, next) => {
    disConnectdb();
    if (err.status) {
        res.status(err.status).send(err.message);
    }
    else {
        console.log(`error message does not have status code ---> ${err.message}`);
        res.status(500).send('unknown error');
    }
    next();
}

export default errorHandler;