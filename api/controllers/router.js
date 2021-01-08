let router = require('express').Router();

router.use('/user', require('./user'));

router.use('/project', require('./project'));

router.use('/timesheet', require('./timesheet'));

router.use('/action', require('./action'));

module.exports = router;