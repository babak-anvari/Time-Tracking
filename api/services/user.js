import * as dataAccess from '../dataAccess/user';
import { User } from '../entities/user'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config';

export const find = async (userEmail) => {
    return await dataAccess.find(userEmail);
}

export const update = async (userInfo) => {
    let user = new User(await dataAccess.update(userInfo));
    return user;
}

export const login = async (req, res) => {
    let { email, password } = req.body;
    let user = await dataAccess.checkpassword(email);
    if (!user) res.appError('User does not exist', 401);
    let passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) res.appError('Invalid password', 401);
    let token = jwt.sign({ email: user.email }, config.secret, {
        expiresIn: 3600
    });
    user = new User(user);
    return ({ ...user, accessToken: token });
}

export const register = async (req, res, next) => {
    let user = req.body;
    let existingUser = await dataAccess.find(user.email);
    if (existingUser) res.appError('There is already a user with the same email', 400);
    user.password = bcrypt.hashSync(user.password, 8);
    try {
        user = await dataAccess.create(user);
        return (user);
    }
    catch (err) {
        err.status = 400;
        next(err);
    }
}