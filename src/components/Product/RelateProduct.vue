<template>
    <!-- Relate Product -->
    <section class="relateproduct bgwhite p-t-45 p-b-138">
      <div class="container">
        <div class="sec-title p-b-60">
          <h3 class="m-text5 t-center">
            Related Products
          </h3>
        </div>

        <!-- Slide2 -->
        <div class="wrap-slick2">
          <div class="slick2">

            <div class="item-slick2 p-l-15 p-r-15">
              <!-- Block2 -->
              <div class="block2" v-for = 'product in relatedProducts' :key = 'product._id'>
                <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                  <img :src="product.image" :alt="product.name">

                  <div class="block2-overlay trans-0-4">
                    <router-link :to = '{name: "product", params: {productId: product._id}}' class="block2-btn-addwishlist hov-pointer trans-0-4">
                      <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                      <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                    </router-link>

                    <div class="block2-btn-addcart w-size1 trans-0-4">
                      <!-- Button -->
                      <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" @click = 'addToCart({item: product, amount: 1})' >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div class="block2-txt p-t-20">
                  <router-link :to = '{name: "product", params: {productId: product._id}}' class="block2-name dis-block s-text3 p-b-5">
                    {{product.name}}
                  </router-link>

                  <span class="block2-price m-text6 p-r-5">
                    {{findLocalPrice(product.price)}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { findPrice } from '@/store/helperFunctions'
export default {
    computed: {
        ...mapGetters([
            'items',
            'itemSelected'
        ]),
        relatedProducts(){
            let tags = this.itemSelected.tags
            let relatedProducts = []
            for (let item of this.items) {
                if (item._id !== this.itemSelected._id) {
                    for (let tag of item.tags) {
                        if (tags.includes(tag)){
                            relatedProducts.push(item)
                        }
                        break
                    }
                }
            }
            console.log(relatedProducts)
            return relatedProducts
        }
    },
    methods:{
        ...mapMutations([
            'addToCart'
        ]),
        findLocalPrice(price){
            return findPrice(Number(price))
        },
    }
}
</script>