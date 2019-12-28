/**
 * 包含多个接口请求函数的模块
 */
import Ajax from './ajax'

const BASE='/api'

//请求登录
export const reqLogin=({username,pwd,captcha})=>Ajax(BASE+'/login_pwd',{username,pwd,captcha},'POST')
//根据经纬度获取位置详情
export const reqAddress=(geohash)=>Ajax(BASE+'/position/'+geohash)
//获取食物分类列表
export const reqFoodCategory=()=>Ajax(BASE+'/index_category')
//根据经纬度获取商铺列表
export const reqShops=({latitude,longitude})=>Ajax(BASE+'/shops',{latitude,longitude})
//根据经纬度和关键字搜索商品列表
export const reqSearchShops=(geohash,keyword)=>Ajax(BASE+'/search_shops',{geohash,keyword})
//获取一次性验证码
export const reqCaptcha=()=>Ajax(BASE+'/captcha')
//发送短信验证码
export const reqSendCode=(phone)=>Ajax(BASE+'/sendcode',{phone})
//手机号验证码登录
export const reqLoginSms=({phone,code})=>Ajax(BASE+'/login_sms',{phone,code},'POST')
//根据会话获取用户信息
export const reqUserinfo=()=>Ajax(BASE+'/userinfo')
//用户登出
export const reqLogout=()=>Ajax(BASE+'/logout')