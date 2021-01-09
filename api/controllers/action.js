let router = require('express').Router();
import * as services from '../services/action';
import ash from '../middleware/asyncHandler';
import { verifyToken } from '../middleware/verifyToken';

router.get('/', verifyToken, ash(async (req, res) => {
    let actions = await services.find();
    res.status(200).send(actions);
}));

router.post('/', verifyToken, ash(async (req, res) => {
    let actions = await services.create(req.body);
    res.status(200).send(actions);
}));

router.put('/', verifyToken, ash(async (req, res) => {
    let actions = await services.update(req.body);
    console.log(actions);
    res.status(200).send(actions);
}));

module.exports = router;
