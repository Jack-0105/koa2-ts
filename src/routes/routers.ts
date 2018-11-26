import * as Koa from 'koa';
import { users } from './users';

module.exports = (app:Koa)=>{
    app.use(users.routes()).use(users.allowedMethods());
}