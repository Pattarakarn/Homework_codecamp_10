const express = require('express');
const router = express.Router();
const cathListContollers = require('../controllers/cathList');
const passport = require('passport');

const authentication = passport.authenticate("jwt",  {session: false} );

router.get('/', authentication, cathListContollers.getCathList);
router.post('/', authentication, cathListContollers.addCathList);
router.get('/:id', authentication, cathListContollers.getCathListById);
router.put('/:id', authentication, cathListContollers.editCathList);

// router.delete('/:id', authentication, todoListContollers.deleteTodoList);

module.exports = router;
