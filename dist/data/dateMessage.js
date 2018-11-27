"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageEnum;
(function (MessageEnum) {
    // 第三方服务器异常
    MessageEnum[MessageEnum["ThirdServiceEx"] = 500] = "ThirdServiceEx";
    //数据库异常
    MessageEnum[MessageEnum["DataBaseEx"] = 501] = "DataBaseEx";
    // 登陆与获取信息正常
    MessageEnum[MessageEnum["LoginAndGetInfoSuccess"] = 200] = "LoginAndGetInfoSuccess";
    // 登陆成功
    MessageEnum[MessageEnum["LoginSuccess"] = 201] = "LoginSuccess";
    // 授权
    MessageEnum[MessageEnum["Authorization"] = 300] = "Authorization";
})(MessageEnum || (MessageEnum = {}));
exports.MessageEnum = MessageEnum;
class DataMessage {
    constructor(code, detail) {
        this.code = code;
        this.detail = detail;
    }
}
exports.DataMessage = DataMessage;
//# sourceMappingURL=dateMessage.js.map