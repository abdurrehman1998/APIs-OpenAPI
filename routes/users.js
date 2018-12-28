const express = require ('express');
const router = express.Router ();
const userController = require ('../controllers/users');



router.post ('/users', userController.createUser);
router.get ('/users', userController.getAllUsers);

router.get ('/users/:userId', userController.getOneUser);
router.put ('/users/:userId', userController.updateUser);
router.delete ('/users/:userId', userController.deleteUser);

router.param ('userId', userController.getByIdUser);

module.exports=router;