<template>
  <span class="topbar-child1">
        Free shipping for standard order over {{ findConvertedPrice(freeShippingAmount) }}
    </span>
</template>

<script>
import { findPrice } from '@/store/helperFunctions'
export default {
    data(){
        return {
            freeShippingAmount: 100
        }
    },
    methods: {
        findConvertedPrice(price) {
            return findPrice(price)
        }
    }
}
</script>

<style>

</style>