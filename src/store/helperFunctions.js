import store from './index'


export const findPrice = (price) =>{ 
    let newPrice = findExchangePrice(price)
    return '$' + newPrice.toFixed(2)
}

export const formatClass = (name, mobile) => {
    if (mobile) name += store.state.mobileClassAddition
    return name
}

export const findExchangePrice = (price) =>{
    return store.state.currency === 'USD' ? price : store.state.exchangeRate * price
}