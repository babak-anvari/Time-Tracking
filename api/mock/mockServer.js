import { Router } from 'express';
import { projects, users, timesheet } from './data';
let router = Router();

router.get('/', (req, res) => {
    res.send('This is the mock server and will be replaced with the actual server later.');
})

router.get('/timesheet', (req, res) => {
    res.status(200).send(timesheet);
})

router.post('/timesheet', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

module.exports = router;