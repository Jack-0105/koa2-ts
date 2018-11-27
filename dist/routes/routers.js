"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
module.exports = (app) => {
    app.use(users_1.users.routes()).use(users_1.users.allowedMethods());
};
//# sourceMappingURL=routers.js.map