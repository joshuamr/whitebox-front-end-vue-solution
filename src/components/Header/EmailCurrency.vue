<template>
  <div :class = 'className' >
        <span class="topbar-email">
            {{ email }}
        </span>
        <div class="topbar-language rs1-select2">
            <select class="selection-1" name="time" @change = 'setLocalCurrency($event)'>
                <option>USD</option>
                <option>EUR</option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { formatClass } from '@/store/helperFunctions'
export default {
    props:['mobile'],
    data(){
        return {
            email: 'fashe@example.com'
        }
    },
    computed: {
        ...mapGetters([
            'mobileClassAddition'
        ]),
        className(){
            return formatClass("topbar-child2", this.mobile)
        }
    },
    methods: {
        ...mapMutations([
            'setCurrency'
        ]),
        setLocalCurrency(event) {
            this.setCurrency(event.target.value)
        },
    }
}
</script>

<style>

</style>