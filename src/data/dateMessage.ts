enum MessageEnum{
    // 第三方服务器异常
    ThirdServiceEx = 500,
    //数据库异常
    DataBaseEx = 501,
    // 登陆与获取信息正常
    LoginAndGetInfoSuccess = 200,
    // 登陆成功
    LoginSuccess = 201,

    // 授权
    Authorization = 300,
}

class DataMessage{
    code:string;
    detail:string;

    public constructor(code,detail){
        this.code = code;
        this.detail = detail;
    }
}

export{
    DataMessage,
    MessageEnum
}