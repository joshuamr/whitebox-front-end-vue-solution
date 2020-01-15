<template>
    <div class="t-center p-l-15 p-r-15">
        <a href="#" v-for = 'method in paymentMethods' :key = 'method'>
            <img class="h-size2" :src="'images/icons/' + method +'.png'" :alt="'IMG-' + method.toUpperCase()">
        </a>

        <div class="t-center s-text8 p-t-20">
            Copyright © 2018 All rights reserved. | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            paymentMethods: ['paypal', 'visa', 'mastercard', 'express', 'discover']
        }
    },
}
</script>