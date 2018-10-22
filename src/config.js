/**
 * Created by T-lih on 2017/5/15.
 */
var env = process.env.NODE_ENV
let httpRes = '';
if (env === 'development') {
     httpRes = 'http://127.0.0.1:8077';
}  else if (env === 'uat') {
    httpRes = 'https://uapi.keking.cn:8002/pay-outer';
} else if (env === 'uprod') {
  httpRes = 'https://uapi.keking.cn:8002/pay-outer';
}else if (env === 'production'){
    httpRes = 'https://api.keking.cn:8002/pay-outer';
} else {
    httpRes = '';
}
export const baseUrl = httpRes;
