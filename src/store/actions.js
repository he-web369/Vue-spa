import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORY} from './mutation-types'
import {reqAddress,reqFoodCategory,reqShops} from '../api/index'

export default {
    //异步获取地址
    async getAddress({commit,state}){
        const {longitude,latitude}=state
        const geohash=latitude+','+longitude
        const result=await reqAddress(geohash)
        if(result.code===0){
            const address=result.data.address.substring(3)
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //异步获取食物分类
    async getCategorys({commit}){
        const result=await reqFoodCategory()
        if(result.code===0){
            const categorys=result.data
            commit(RECEIVE_CATEGORY,{categorys})
        }
    },
    //异步获取商店列表
    async getShops({commit}){
        const {longitude,latitude}=state
        const result=await reqShops({latitude,longitude})
        if(result.code===0){
            const shops=result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },
}