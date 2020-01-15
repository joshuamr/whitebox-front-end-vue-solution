<template>
  <div :class='className'>
        <a href="#" class="header-wrapicon1 dis-block">
            <img src="images/icons/icon-header-01.png" class="header-icon1" alt="ICON">
        </a>

        <span :class="lineDivideClass"></span>

        <div class="header-wrapicon2">
            <img src="images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON"  @click = 'cartClicked = !cartClicked'>
            <span class="header-icons-noti">{{ numberOfCartItems }}</span>

            <!-- Header cart noti -->
            <div class="header-cart header-dropdown" :style = 'dropDownStyle'>
                <ul class="header-cart-wrapitem">
                    <li class="header-cart-item" v-for = 'item in cart' :key = item._id>
                        <div class="header-cart-item-img">
                            <img :src="item.image" :alt="item.name">
                        </div>

                        <div class="header-cart-item-txt">
                            <a href="#" class="header-cart-item-name">
                                {{ item.name }}
                            </a>

                            <span class="header-cart-item-info">
                                {{ item.amount }} x {{ findConvertedPrice(item.price) }}
                            </span>
                        </div>
                    </li>
                </ul>

                <div class="header-cart-total">
                    Total: {{ totalPrice }}
                </div>

                <div class="header-cart-buttons">
                    <div class="header-cart-wrapbtn">
                        <!-- Button -->
                        <a href="cart.html" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                            View Cart
                        </a>
                    </div>

                    <div class="header-cart-wrapbtn">
                        <!-- Button -->
                        <a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                            Check Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { findPrice } from '@/store/helperFunctions'
import { formatClass } from '@/store/helperFunctions'
import { mapGetters } from 'vuex'
export default {
    props: ['mobile'],
    data(){
        return {
            cartClicked: false
        }
    },
    computed: {
        ...mapGetters([
            'cart'
        ]),
        className(){
            return formatClass ('header-icons', this.mobile)
        },
        dropDownStyle(){
            if (this.cartClicked) {
                return {
                    '-webkit-transform': 'scale(1)',
                    transform: 'scale(1)' 
                }
            } else return {}
        },
        lineDivideClass(){
            let className = 'linedivide'
            className += this.mobile ? '2' : '1'
            return className
        },
        numberOfCartItems() {
            return this.cart.reduce((acc, curr) =>{
                return acc + curr.amount
            }, 0)
        },
        totalPrice() {
            let total = this.cart.reduce((acc, curr) =>{
                return acc + curr.amount * Number(curr.price)
            }, 0)
            return findPrice(total)
        }
    },
    methods: {
        findConvertedPrice(price) {
            return findPrice(Number(price))
        }
    }
}
</script>

<style>

</style>