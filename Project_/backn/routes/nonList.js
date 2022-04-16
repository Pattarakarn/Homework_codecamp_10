const express = require('express');
const router = express.Router();
const nonListContollers = require('../controllers/nonList');
const passport = require('passport');

const authentication = passport.authenticate("jwt",  {session: false} );

router.get('/', authentication, nonListContollers.getNonList);
router.post('/', authentication, nonListContollers.addNonList);
router.get('/:id', authentication, nonListContollers.getNonListById);
router.put('/:id', authentication, nonListContollers.editNonList);

module.exports = router;