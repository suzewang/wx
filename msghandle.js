const formatMsg=require('./fmtwxmsg');

function help(){
    //字符串
    return '你好，这是一个测试号，目前会原样返回用户输入的消息，暂不支持视频类型'
}
/**
 * 
 * @param {object} wxmsg 解析XML消息的对象
 * @param {object} retmsg 要返回的数据对象
 */
function userMsg(wxmsg,retmsg){
    //关键字自动回复
    if(wxmsg.MsgType=='text'){
        switch (wxmsg.Content){
	    case 'who':
		retmsg.msgtype='text';
                retmsg.msg='学号：2017012025，姓名：苏泽旺';
                return formatMsg(retmsg);
            case '帮助':
		retmsg.msg=help();
                retmsg.msgtype='text';
                return formatMsg(retmsg);
            case 'help':
		retmsg.msg=help();
                retmsg.msgtype='text';
                return formatMsg(retmsg);
            case '?':
                retmsg.msg=help();
                retmsg.msgtype='text';
                return formatMsg(retmsg);
            case 'about':
                retmsg.msgtype='text';
                retmsg.msg='我是这个测试号开发者';
                return formatMsg(retmsg);
            default:
                retmsg.msgtype='text';
                retmsg.msg=wxmsg.Content;
                return formatMsg(retmsg);
        }
    }
    switch (wxmsg.MsgType){
        case 'image':
	    retmsg.msgtype=wxmsg.MsgType;
            retmsg.msg=wxmsg.MediaId;
            return formatMsg(retmsg);
        case 'voice':
            retmsg.msgtype=wxmsg.MsgType;
            retmsg.msg=wxmsg.MediaId;
            return formatMsg(retmsg);
        default:
            return formatMsg(retmsg);
    }
}

exports.help=help;
exports.userMsg=userMsg;

exports.msgDispatch=function(wxmsg,retmsg){
    return userMsg(wxmsg,retmsg);
}