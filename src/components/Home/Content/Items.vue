<template>
  <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 p-b-50" v-for = 'item in itemsToShow' :key = 'item._id'>
            <!-- Block2 -->
            <div class="block2">
                <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                    <img :src="item.image" :alt="item.name">

                    <div class="block2-overlay trans-0-4">
                        <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">
                            <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                            <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div class="block2-btn-addcart w-size1 trans-0-4">
                            <!-- Button -->
                            <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" @click = addToCart(item)>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div class="block2-txt p-t-20">
                    <a @click = '$router.push({name: "product", params: {productId: item._id}})' class="block2-name dis-block s-text3 p-b-5">
                        {{ item.name }}
                    </a>

                    <span class="block2-price m-text6 p-r-5">
                        {{ findConvertedPrice(Number(item.price)) }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { findPrice } from '@/store/helperFunctions'
export default {
    computed: {
        ...mapGetters([
            'itemsToUse',
            'page'
        ]),
        itemsToShow(){
            let minIndex = (this.page - 1) * 12
            let maxIndex = this.page * 12
            return this.itemsToUse.filter((item, index) =>{
                return index >= minIndex && index < maxIndex
            })
        }
    },
    methods: {
        ...mapMutations([
            'addToCart'
        ]),
        findConvertedPrice(price) {
            return findPrice(price)
        }
    }
}
</script>

<style>

</style>