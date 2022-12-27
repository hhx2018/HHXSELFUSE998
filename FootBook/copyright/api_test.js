/**

此文件用于测试api结果

**/


//全局变量 policy
policy = "HHX"

//注意const不可重复声明同一个变量,换用var
var message = {
    action: "get_policy_state"
};


$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log('这是get_policy_state(无content)的输出结果' + output);
    }
//    $done();
}, reject => {
    // Normally will never happen.
    $done();
});


var message = {
    action: "get_policy_state",
    content: "HHX"
};


$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log('这是get_policy_state(content=HHX)的输出结果' + output);
    }
//    $done();
}, reject => {
    // Normally will never happen.
    $done();
});



var message = {
    action: "get_customized_policy"
};


$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log('这是get_customized_policy（无content）的输出结果' + output);
    }
//    $done();
}, reject => {
    // Normally will never happen.
    $done();
});


var message = {
    action: "get_customized_policy",
    content: "HHX"
};


$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log('这是get_customized_policy（content=HHX）的输出结果' + output);
    }
//    $done();
}, reject => {
    // Normally will never happen.
    $done();
});




var dict = { [policy] : "低倍率"};
var mes1 = {
    action: "set_policy_state",
    content: dict
}; 
$configuration.sendMessage(mes1).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log("这是set_policy_state（传入的policy是数组）的输出结果：" + output)

    }
//    $done();
}, reject => {
    // Normally will never happen.
    $done();
});


var dict = { policy: "低倍率"};
var mes1 = {
    action: "set_policy_state",
    content: dict
}; 
$configuration.sendMessage(mes1).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log("这是set_policy_state（传入的policy是字符串）的输出结果：" + output)

    }
//    $done();
}, reject => {
    // Normally will never happen.
    $done();
});



