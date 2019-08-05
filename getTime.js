 function getTime() {
        //年
        var yer = dt.getFullYear();
        //月
        var moth = dt.getMonth()+1;
        //日
        var day = dt.getDate();
        //时间
        var hour = dt.getHours();
        //分钟
        var minutes = dt.getMinutes();
        //秒
        var seconds = dt.getSeconds();
        moth=moth>10?moth:"0"+moth
        day=day>10?day:"0"+day;
        hour=hour>10?hour:"0"+hour;
        minutes=minutes>10?minutes:"0"+minutes;
        seconds=seconds>10?seconds:"0"+seconds;
        var riQi;
        return riQi= 
yer+"年"+moth+"月"+day+"日"+hour+"时"+minutes+"分"+seconds+"秒"
    }

    var dt = new Date();
    console.log(getTime());
