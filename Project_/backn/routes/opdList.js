const express = require('express');
const router = express.Router();
const opdListContollers = require('../controllers/opdList');
const passport = require('passport');

const authentication = passport.authenticate("jwt",  {session: false} );

router.get('/', authentication, opdListContollers.getOPDList);
router.post('/', authentication, opdListContollers.addOPDList);
router.get('/:id', authentication, opdListContollers.getOPDListById);
router.put('/:id', authentication, opdListContollers.editOPDList);

module.exports = router;