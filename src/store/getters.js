export default {
    totalCount(state){
        return state.cartFoods.reduce((pre,food)=>{
            pre=pre+food.count
            return pre
        },0)
    },
    totalPrice(state){
        return state.cartFoods.reduce((pre,food)=>{
            pre=pre+food.price*food.count
            return pre
        },0)
    },
    positiveSize(state){
        return state.ratings.reduce((pre,item)=>{
            return pre+(item.rateType===0?1:0)
        },0)
    }
}