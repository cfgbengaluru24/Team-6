const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

router
  .route('/login')
  .post(authController.login);

router
  .route('/forgotPassword')
  .post(authController.forgotPassword);

router
  .route('/resetPassword/:token')
  .patch(authController.resetPassword);

router
  .route('/updatePassword')
  .patch(authController.updatePassword);

router
  .route('/')
  .get(authController.protect,authController.restrictTo('admin') ,userController.getAllUsers)
  .post(userController.createUser)
  .patch(authController.protect,userController.updateUser)
  .delete(authController.protect,userController.deleteUser);

router
  .route('/:id')
  .get(userController.getUser)

  router
  .route('/:id/role')
  .patch(authController.protect, userController.updateUserRole);
  
module.exports = router;
