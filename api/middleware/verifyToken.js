const jwt = require("jsonwebtoken");
import config from '../config/config';
import * as userServices from '../services/user';

export const verifyToken = (req, res, next) => {
    console.log('Verifying the token');
    let token = req.headers["x-access-token"];
    if (!token) {
        res.appError('Token is not provided', 403);
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) res.appError(err.message, 401);
        userServices.find(decoded.email)
            .then(user => {
                req.body.user = user;
                next();
            })
            .catch(err)
    });
};