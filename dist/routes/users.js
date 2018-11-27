"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
var users = new Router();
exports.users = users;
const usersController = require('../controllers/usersController');
/**
 * 登陆
 */
users.get('/users/login', usersController.login);
/**
 * 注册
 */
users.post('/users/register', usersController.register);
/**
 * 用户授权
 */
users.get('/users/getauth', usersController.authorization);
/**
 * 用户授权
 */
users.post('/users/setauth', usersController.setAuthorization);
//# sourceMappingURL=users.js.map