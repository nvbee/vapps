/*
 * @Author: monster.huangwei
 * @Date: 2018-11-04 16:54:44
 * @Last Modified by: monster.huangwei
 * @Last Modified time: 2018-11-10 15:42:51
 */
import store from '@/store'
import {
    AXIOS_POST
} from '@/lib/axios'
/**
 * 接口请求
 * json 请求的数据；
 * options 请求的相关设置
 */
//查询绑定的车牌
export const getData = ({json = {}, options = {}}) => { return AXIOS_POST({ url: 'queryLicensePlate', json, options }) }
//获取jssdk参数
export const getWxJssdk = ({json = {}, options = {}}) => { return AXIOS_POST({ url: 'saveOrUpdateMerchantInfo', json, options }) }
//查询或者开通停车场功能
export const queryOrOpenParking = ({json = {}, options = {}}) => { return AXIOS_POST({ url: 'operUserParkinglot', json, options }) }
//查询要展示的车牌
export const queryShowPlate = ({json = {}, options = {hideLoading: true}}) => { return AXIOS_POST({ url: 'licensePlateView', json, options }) }
//保存车牌号码
export const savePlateNo = ({json = {}, options = {hideLoading: true}}) => { return AXIOS_POST({ url: 'saveLicensePlate', json, options }) }
//查询停车账单
export const queryParkingBill = ({json = {}, options = {}}) => { return AXIOS_POST({ url: 'getBillForParkingLot', json, options }) }
//微信下单支付
export const wechatOrderPay = ({json = {}, options = {host: "setHeaders"}}) => { return AXIOS_POST({ url: 'weChatOfficialAccountsOrder', json, options }) }
//查询缴费记录列表
export const getPayRecordsList = (pageNum) => {
    return AXIOS_POST({
        url: 'orderListQueryService',
        json: {
            openId: store.state.openId,
            merchantId: "898500065133629",
            pageNum: pageNum,
            pageSize: '20',
        }, options: {hideLoading: true}})}
