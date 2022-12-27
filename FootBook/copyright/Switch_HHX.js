/**

此脚本用于每日定时对HHX策略复位为Direct。


**/


policy = "HHX"
policyy = "StreamingSE"
var cronsign = $environment.executeType == 0 || $environment.executeType == "0" || $environment.executeType == "-1"? "Y" : "N"


var dict = { [policy] : "DIRECT"};
var dict2 = { [policyy] : "DIRECT"};

var mes1 = {
    action: "set_policy_state",
    content: dict
}; 

var mes2= {
    action: "set_policy_state",
    content: dict2
}; 

$configuration.sendMessage(mes2).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log("🥺StreamingSE策略组已经复位为Direct！")}
});


$configuration.sendMessage(mes1).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log("🥺HHX策略组已经复位为Direct！")
        // 如果是定时任务，则发送通知
        // if (cronsign == "Y") {$notify("🥺HHX和StreamingSE策略组已经复位为Direct！")}
        $done({"title":"HHX定时复位", "htmlMessage": 'Done' })
    }
}, reject => {
    // Normally will never happen.
    $done();
});
