const express = require('express');
const router = express.Router();
const orListContollers = require('../controllers/orList');
const passport = require('passport');

const authentication = passport.authenticate("jwt",  {session: false} );

router.get('/', authentication, orListContollers.getORList);
router.post('/', authentication, orListContollers.addORList);
router.get('/:id', authentication, orListContollers.getORListById);
router.put('/:id', authentication, orListContollers.editORList);
router.delete('/:id', authentication, orListContollers.deleteOrList);

module.exports = router;