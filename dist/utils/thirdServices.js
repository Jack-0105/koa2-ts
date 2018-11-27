"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var { api } = require('./netHelper');
const { appid, secret } = require('../config/appConfig');
/**
 * 微信
 * @param code
 */
function getWxUrl(code) {
    return 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + code;
    ;
}
const thirdServices = {
    /**
     * 获取微信唯一id
     * @param code
     */
    async getWxOpenId(code) {
        var url = getWxUrl(code);
        return api.get(url);
    },
};
exports.thirdServices = thirdServices;
//# sourceMappingURL=thirdServices.js.map