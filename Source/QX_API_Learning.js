/**

欢呼熊使用此文件进行QXapi的学习，以自己编写脚本使用！！！！！！！！！！！！！！！！！！！！！！


* @fileoverview 
Example to deal with current configuration 
through API “    $configuration.sendMessage    ”.
**/

111111111111111111111
*-------------------------url_latency_benchmark,-----------------------
                            --节点延迟测试--
                        返回测速结果的“字典”
                        包含键：节点标识；值：[TCP握手，url连接]
-----------------------------------------------------------------------
/* Action: url_latency_benchmark
* Do the URL Latency Benchmark for the input servers (actually server tags),
* So you can customize (combined with task) your static policy to a url-latency-benchmark like policy.
* For more features maybe added in the future, you may have more control over the policy.
* Returns a JSON like {"ret" : {"Node-001" : [31, 126], "Node-002" : [23, -1]}}
*/



2222222222222222222222222
*-------------------------get_server_description,-----------------------
                            --获取节点信息--
                        返回JSON结果
-----------------------------------------------------------------------
/* Action: get_server_description (only available for event-interaction script and v1.0.30-build691 iOS 13.0 +)
* Returns a JSON like {"ret" : {"TheTag" : "socks5=example.com:80,fast-open=false, udp-relay=false, tag=TheTag"}}
* If no such server with the tag, then returns a JSON {"ret" : {"TheTag" : ""}}
* This action does not support empty or array content input, since getting all servers is inappropriate.
*
*/



333333333333333333333333333
*-------------------------get_customized_policy,-----------------------
                            --获取用户分流策略--
                        返回JSON结果，如果没有在content定义指定策略组，返回所有策略组的所有情况

//输入一个字典，包含action,content. content为自定义变量
const message = {
    action: "get_customized_policy",
    content: policy

};
-----------------------------------------------------------------------
/* Action: get_customized_policy
* Returns a JSON
*
*/



4444444444444444444444444444444444
*-------------------------get_policy_state,-----------------------
                            --获取用户分流策略的状况state--
                            --无论是否传入content，均返回所有策略的当前 “选择结果”--
                        返回JSON结果{'结果'：{'HHX'}}
-----------------------------------------------------------------------
/* Action: get_policy_state
* Returns a JSON like {"ret" : {"policy1" : ["policy1", "thePolicyThatPolicy1Selected", ... , "theLeaf1"],
* "policy2" : ["policy2", "thePolicyThatPolicy2Selected", ... ,"theLeaf2"]}}
*
*/



555555555555555555555555555
-------------------------set_policy_state,-----------------------
                            --设置策略状态，只工作在 “static” 模式的策略组！--
                        返回一个 “更新后的策略组状态” JSON格式

policy = '要操作的策略组'
var dict = { [policy]: "低倍率"}; //注意中括号

var message = {
    action: "get_policy_state",
    content: dict

};

-----------------------------------------------------------------------
/* Action: set_policy_state
* This only works for the static type policy and the built-in policy named "proxy".
* Related active connections will be closed if the "Moderated Policy Mechanism" is turned off,
* the returned JSON from set_policy_state will resolve (promise) only when all the related connections
* are closed.
* If this API is called in a response type script, even all the related active connections
* (including the connection that called this API) will be closed, but actually the reponse of this connection
* has already been completely received.
* Returns an updated policy state in JSON like {"ret" : {"policy1" : ["policy1", "thePolicyThatPolicy1Selected", ... ,
* "theLeaf1"], "policy2" : ["policy2", "thePolicyThatPolicy2Selected", ... , "theLeaf2"]}}
*
*
* @supported Quantumult X (v1.0.22-build545) iOS 13.0 +
*/


------------------------------------下面列出了可以传入的变量格式说明---------------------------------------------


----------------------------------
            Const dict
----------------------------------
/*
const dict = {"proxy": "Node-002", "cPolicy": "Node-007"};
const message = {
    action: "set_policy_state",
    content: dict
};
*/


----------------------------------
            Const array
----------------------------------
/*
const array = ["Node-001","Node-002","Node-003","Node-004"];
const message = {
    action: "url_latency_benchmark",
    content: array
};
*/


----------------------------------
            Const TheTag
----------------------------------
/*
const data = "TheTag";
const message = {
    action: "get_server_description",
    content: data
};
*/


----------------------------------
            Const message
----------------------------------
/*
const message = {
    action: "get_customized_policy"
};
*/


----------------------------------
            Const PolicyName
----------------------------------
/*
const data = "PolicyName";
const message = {
    action: "get_customized_policy",
    content: data
};
*/


----------------------------------
            Const data
----------------------------------
/*
const data = ["PolicyName1","PolicyName2"];
const message = {
    action: "get_customized_policy",
    content: data
};
*/



6666666666666666666667777777777777777777777777
*-------------------------get/set_running_mode,实例说明-----------------------
                         用于获取当前分流模式，或者设置当前分流模式
                         分为三种：all_proxy, 
                                    all_direct,
                                         filter
-----------------------------------------------------------------------*
/*
const message = {
    action: "get_running_mode"
};

$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log(output);
    }
    $done();
}, reject => {
    // Normally will never happen.
    $done();
});
*/

/* all_proxy, all_direct, filter
const dict = { "running_mode": "all_proxy" };
const message = {
    action: "set_running_mode",
    content: dict
};

$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log(output);
    }
    $done();
}, reject => {
    // Normally will never happen.
    $done();
});
*/



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
    $done();
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
    $done();
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
    $done();
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
    $done();
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
    $done();
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
    $done();
}, reject => {
    // Normally will never happen.
    $done();
});



