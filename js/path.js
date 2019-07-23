path="http://localhost:9090/aicheck-face";

var time=new Date().getTime();
var token="297e325a66f62bae0166f631b0b20002";

var map={
    timestamp:time,
    nonce:time,
    token:token,
};

var initmap={
    timestamp:time,
    nonce:time,
    token:token,
};

function jsonSort(jsonObj) {
    let arr = [];
    for (var key in jsonObj) {
        arr.push(key)
    }
    arr.sort();
    let str = '';
    for (var i in arr) {
        if(arr[i]!='timestamp' && arr[i]!='nonce' && arr[i]!='token' && arr[i]!='sign' && jsonObj[arr[i]]!=''){
        str += arr[i] + "=" + jsonObj[arr[i]] + "&";
    }
    }
    return str;
}