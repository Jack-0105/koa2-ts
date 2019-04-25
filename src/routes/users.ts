import * as Router from 'koa-router';

var users = new Router();

const usersController = require('../controllers/usersController')

/**
 * 登陆
 */
users.get('/users/login', usersController.login);

export {
    users
};
