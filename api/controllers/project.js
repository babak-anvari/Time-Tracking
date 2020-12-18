let router = require('express').Router();
import { Project } from '../entities/project';
import * as services from '../services/project';
import ash from '../middleware/asyncHandler';
import { verifyToken } from '../middleware/verifyToken';

router.get('/', verifyToken, ash(async (req, res) => {
    let projects = await services.findAll();
    res.status(200).send(projects);
}));

router.post('/', verifyToken, ash(async (req, res) => {
    let project = new Project(req.body);
    project = await services.create(project);
    res.send(project);
}));

router.get('/find', verifyToken, ash(async (req, res) => {
    let project = await services.find(req.query.projectNumber);
    res.status(200).send(project);
}));


module.exports = router;
