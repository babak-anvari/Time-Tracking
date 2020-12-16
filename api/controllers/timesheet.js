const router = require('express').Router();
import ash from '../middleware/asyncHandler';
import { verifyToken } from '../middleware/verifyToken';
import * as services from '../services/timesheet';
import * as projectServices from '../services/project';

//Find timesheet
router.get('/', ash(async (req, res) => {
    let timesheet = await services.find(req.query.weekEnd, req.query.userId);
    res.send(timesheet);
}))

//Save timesheet
router.post('/', ash(async (req, res) => {
    let timesheet = await services.find(req.body.weekEnd, req.body.userId);
    if (timesheet) {
        res.appError('Timesheet already exist', 400);
    }
    else {
        timesheet = await services.create(req.body);
        res.status(200).send(timesheet);
    }
}))

//Update timesheet
router.put('/', ash(async (req, res) => {
    let timesheet = await services.update(req.body);
    res.status(200).send(timesheet);
}))


module.exports = router;