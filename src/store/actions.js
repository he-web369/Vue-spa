import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORY,
    RECEIVE_USERINFO,RESET_USER_INFO,RECEIVE_SHOP_GOODS,
    RECEIVE_SHOP_INFO,RECEIVE_SHOP_RATINGS,INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,CLEAR_CART,RECEIVE_SEARCH_SHOPS
} from './mutation-types'
import {reqAddress,reqFoodCategory,reqShops, reqUserinfo, 
    reqLogout,reqShopGoods,reqShopInfo,reqShopRatings, reqSearchShops
} from '../api/index'

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
    async getShops({commit,state}){
        const {longitude,latitude}=state
        const result=await reqShops({latitude,longitude})
        if(result.code===0){
            const shops=result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    getUserInfo({commit},userInfo){
        commit(RECEIVE_USERINFO,{userInfo})
    },
    //异步获取用户信息
    async getUserInfoAsync({commit}){
        const result=await reqUserinfo()
        if(result.code===0){
            const userInfo=result.data
            commit(RECEIVE_USERINFO,{userInfo})
        }
    },
    //异步登出
    async logout({commit}){
        const result=await reqLogout()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    },
    //异步获取商家信息
    async getShopInfo({commit}){
        const result=await reqShopInfo()
        if(result.code===0){
            const info =result.data
            commit(RECEIVE_SHOP_INFO,{info})
        }
    },
    //异步获取商家商品列表
    async getShopGoods({commit},callback){
        const result=await reqShopGoods()
        if(result.code===0){
            const goods=result.data
            commit(RECEIVE_SHOP_GOODS,{goods})
            callback && callback()
        }
    },
    //异步获取商家评价列表
    async getShopRatings({commit},callback){
        const result=await reqShopRatings()
        if(result.code===0){
            const ratings=result.data
            commit(RECEIVE_SHOP_RATINGS,{ratings})
            callback&&callback()
        }
    },
    //同步更新food中的count值
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },
    //同步清空购物车
    clearCart({commit}){
        commit(CLEAR_CART)
    },
    //异步获取搜索的商店
    async getSearchShops({commit,state},keyword){
        const {longitude,latitude}=state
        const geohash=latitude+','+longitude
        const result =await reqSearchShops({geohash,keyword})
        if(result.code===0){
            const searchShops=result.data
            commit(RECEIVE_SEARCH_SHOPS,{searchShops})
        }
    }
}