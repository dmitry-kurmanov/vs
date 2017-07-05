<template>
    <div>
        <button data-value="designer" @click="changeTab"> Survey Designer </button>

        <designer-view v-show="$store.state.currentTab === 'designer'"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Designer from './views/Designer.vue'

    export default {

        components: {
            "designer-view": Designer
        },

        methods: {
            changeTab (e) {
                this.$store.commit('changeCurrentTab', e.target.dataset.value)
            }
        }
    }
</script>