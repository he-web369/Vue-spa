import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import UserInfo from '../pages/UserInfo/UserInfo.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/msite',
            component:Msite
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/',
            redirect: '/msite'
        },
        {
            path:'/login',
            component:Login,
            meta:{
                showFooter:false
            }
        },
        {
            path:'/userinfo',
            component:UserInfo,
            meta:{
                showFooter:false
            }
        },
        {
            path:'/shop',
            component:Shop,
            meta:{
                showFooter:false
            },
            children:[
                {
                    path:'ratings',
                    component: ShopRatings,
                    meta:{
                        showFooter:false
                    }
                },
                {
                    path:'goods',
                    component: ShopGoods,
                    meta:{
                        showFooter:false
                    }
                },
                {
                    path:'info',
                    component: ShopInfo,
                    meta:{
                        showFooter:false
                    }
                },
                {
                    path:'',
                    redirect: 'goods'
                }
            ]
        }
    ]
})
