import Vue from 'vue'

import {
    RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORY,
    RECEIVE_USERINFO,RESET_USER_INFO,RECEIVE_SHOP_GOODS,
    RECEIVE_SHOP_RATINGS,RECEIVE_SHOP_INFO,DECREMENT_FOOD_COUNT,
    INCREMENT_FOOD_COUNT
} from './mutation-types'

export default {
    [RECEIVE_ADDRESS](state,{address}){
        state.address=address
    },    
    [RECEIVE_SHOPS](state,{shops}){
        state.shops=shops
    },    
    [RECEIVE_CATEGORY](state,{categorys}){
        state.categorys=categorys
    },   
    [RECEIVE_USERINFO](state,{userInfo}){
        state.userInfo=userInfo
    },
    [RESET_USER_INFO](state){
        state.userInfo={}
    }, 
    [RECEIVE_SHOP_GOODS](state,{goods}){
        state.goods=goods
    }, 
    [RECEIVE_SHOP_RATINGS](state,{ratings}){
        state.ratings=ratings
    }, 
    [RECEIVE_SHOP_INFO](state,{info}){
        state.info=info
    }, 
    [DECREMENT_FOOD_COUNT](state,{food}){
        if(food.count){
            food.count--
            if(food.count===0){
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [INCREMENT_FOOD_COUNT](state,{food}){
        if(!food.count){
            //food.count=1
            Vue.set(food,'count',1)
            //将food添加到cartFoods中'
            state.cartFoods.push(food)
        }else{
            food.count++
        }
    }
}