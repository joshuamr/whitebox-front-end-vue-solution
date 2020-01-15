<template>
  <div :class = 'className'>
        <a href="#" v-for= 'link in socialLinks' :key = 'link' :class="'topbar-social-item fa fa-' + link"></a>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatClass } from '@/store/helperFunctions'
export default {
    props: ['mobile'],
    data() {
        return {
            socialClass: 'topbar-social'
        }
    },
    computed: {
        ...mapGetters([
            'mobileClassAddition',
            'socialLinks'
        ]),
        className(){
            return formatClass (this.socialClass, this.mobile)
        }
    }
}
</script>

<style>

</style>