import Vue from 'vue'
import Vuex from 'vuex'
import { findExchangePrice } from './helperFunctions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    colors: [],
    currency: 'USD',
    category: 'All',
    categories: ['All', 'Men', 'Women', 'Dresses', 'Sunglasses', 'Kids', 'Accessories'],
    items: [],
    itemSelected: {},
    exchangeRate: 1.11,
    filtersToUse: [],
    mobileClassAddition: '-mobile',
    page: 1,
    priceRangeMid: 100,
    searchProducts: '',
    socialLinks: ['facebook', 'instagram', 'pinterest-p', 'snapchat-ghost', 'youtube-play'],
    sortingParam: '',
    sortPriceRange: null,
  },
  getters: {
    cart(state) {
      return state.cart
    },
    category(state) {
      return state.category
    },
    colors(state) {
      return state.colors
    },
    currency(state) {
      return state.currency
    },
    exchangeRate(state) {
      return state.exchangeRate
    },
    filtersToUse(state) {
      return state.filtersToUse
    },
    items(state) {
      return state.items
    },
    itemSelected(state) {
      return state.itemSelected
    },
    itemsToUse(state, getters) {
      let itemsToInclude = []
      if (state.colors.length) {
        state.colors.forEach(color =>{
          state.items.forEach(item=>{
            if (item.about.includes(color) && !itemsToInclude.some(el=>el._id === item._id) ){
              itemsToInclude.push(item)
            }
          })
        })
      } else itemsToInclude = [...state.items]
      if (state.category !== 'All') {
        itemsToInclude = itemsToInclude.filter(item=> item.tags.includes(state.category))
      }
      if (state.filtersToUse.length) {
        if (state.filtersToUse.includes('price')) {
          itemsToInclude = itemsToInclude.filter(item=>{
            let price = findExchangePrice(Number(item.price))
            return price >= getters.priceRangeLow && price <= getters.priceRangeHigh
          })
        }
        if (state.filtersToUse.includes('search')){
          itemsToInclude = itemsToInclude.filter(item=> item.tags.includes(state.searchProducts))
        }
      }
      if (state.sortPriceRange) {
        if (state.sortPriceRange === 'max') {
          itemsToInclude = itemsToInclude.filter(item=> Number(item.price) >= 200)
        } else {
          itemsToInclude = itemsToInclude.filter(item=> {
            let price = findExchangePrice(Number(item.price)) 
            let low = Number(state.sortPriceRange) - 25
            let high = Number(state.sortPriceRange) + 25
            return (price >= low && price <= high)
          })
        }
      }
      if (state.sortingParam) {
        if (state.sortingParam === 'lth') {
          itemsToInclude.sort(function(a, b) {
            if (Number(a.price) > Number(b.price)) return 1
            else return -1
          })
        } else if (state.sortingParam === 'htl') {
          itemsToInclude.sort(function(a, b) {
            if (Number(a.price) < Number(b.price)) return 1
            else return -1
          })
        } else if (state.sortingParam === 'pop'){
          //don't know what to do
        }
      }
      return itemsToInclude
    },
    midPrice(state){
      return state.midPrice
    },
    mobileClassAddition(state) {
      return state.mobileClassAddition
    },
    page(state) {
      return state.page
    },
    priceRangeHigh(state){
        return Math.min(+state.priceRangeMid + 25, 1000)
    },
    priceRangeLow(state){
        return Math.max(+state.priceRangeMid - 25, 10)
    },
    priceRangeMid(state) {
      return state.priceRangeMid
    },
    searchProducts(state) {
      return state.searchProducts
    },
    socialLinks(state) {
      return state.socialLinks
    },
    sortingParam(state){
      return state.sortingParam
    },
    sortPriceRange(state) {
      return state.sortPriceRange
    }
  },
  mutations: {
    addToCart(state, {item, amount}) {
      let cart = [...state.cart]
      let indexFound = cart.findIndex(el=> el._id === item._id)
      if (indexFound >= 0) {
        cart[indexFound].amount += amount
      } else cart.push({_id: item._id, image: item.image, price: item.price, amount, name: item.name})
      state.cart = cart
    },
    setCart(state, array) {
      state.cart = array
    },
    setCategory(state, string) {
      state.category = string
    },
    setColors(state, array) {
      state.colors = array
    },
    setCurrency(state, string) {
      state.currency = string
    },
    setExchangeRate(state, number) {
      state.exchangeRate = number
    },
    setFiltersToUse(state, array) {
      console.log(array)
      state.filtersToUse = array
    },
    setItems(state, array) {
      state.items = array
    },
    setItemSelected(state, object) {
      state.itemSelected = object
    },
    setPage(state, number) {
      state.page = number
    },
    setPriceRangeMid(state, number) {
      state.priceRangeMid = number
    },
    setSearchProducts(state, string) {
      state.searchProducts = string
    },
    setSortingParam(state, string) {
      state.sortingParam = string
    },
    setSortPriceRange(state, nullMaxOrNumber) {
      let filters = [...state.filtersToUse]
      if (filters.includes('price')){
        filters.splice(filters.indexOf('price'), 1)
        state.filtersToUse = filters
        console.log(filters)
      }
      state.sortPriceRange = nullMaxOrNumber
    }
  },
  actions: {
  },
  modules: {
  }
})
