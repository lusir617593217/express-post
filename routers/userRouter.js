const express = require("express");
const multer = require("multer");
const auth = require("../middlewares/auth");

const upload = multer({
  dest: "./uploads"
});

const userController = require("../controllers/userController");

const router = express.Router();

/**
 * @api {post} /register 用户注册
 * @apiGroup 用户
 *
 * @apiParam (body) {String} email 用户邮箱
 * @apiParam (body) {String} password 用户密码
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 */
router.post("/register", userController.register);

/**
 * @api {post} /login 用户登录
 * @apiGroup 用户
 *
 * @apiParam (body) {String} email 用户邮箱
 * @apiParam (body) {String} password 用户密码
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccess {String} token token
 */
router.post("/login", userController.login);

/**
 * @api {get} /getInfo 获取当前登录用户的基本信息
 * @apiGroup 用户
 *
 * @apiParam (Headers) {String} Authorization token信息
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccess {Object} data 当前用户基本信息
 */
router.get("/getInfo", auth, userController.getInfo);

/**
 * @api {put} /users/update 修改当前用户的基本信息
 * @apiGroup 用户
 *
 * @apiParam (body) {Object} avatar 要修改的头像
 * @apiParam (Headers) {String} Authorization token信息
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccess {Object} data 修改之后的当前用户基本信息
 */
router.put(
  "/users/update",
  auth,
  upload.single("avatar"),
  userController.update
);

/**
 * @api {put} /users/resetPwd 重置密码
 * @apiGroup 用户
 *
 * @apiParam (Headers) {String} Authorization token信息
 * @apiParam (body) {String} oldPwd 原密码
 * @apiParam (body) {String} newPwd 新密码
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 */
router.put(
  '/users/resetPwd',
  auth,
  userController.resetPwd
)

module.exports = router;
