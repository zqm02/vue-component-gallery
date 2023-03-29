//向服务器发送请求，获取验证码
import request from "@/utils/request";

export function getCaptcha(params) {
    return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}