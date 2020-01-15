<template>
    <div class="flex-m p-t-30">
        <a href="#" v-for= 'link in socialLinks' :key = 'link' :class="'fs-18 color1 p-r-20 fa fa-' + link"></a>
        <!-- <a href="#" class="fs-18 color1 p-r-20 fa fa-instagram"></a>
        <a href="#" class="fs-18 color1 p-r-20 fa fa-pinterest-p"></a>
        <a href="#" class="fs-18 color1 p-r-20 fa fa-snapchat-ghost"></a>
        <a href="#" class="fs-18 color1 p-r-20 fa fa-youtube-play"></a> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'socialLinks'
        ])
    }
}
</script>