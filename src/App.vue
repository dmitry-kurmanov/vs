<template>
    <div>
        <button data-value="designer" @click="changeTab"> Survey Designer </button>

        <vse-designer-view v-show="$store.state.currentTab === 'designer'"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        props: {
            options: {
                type: Object,
                default: null
            }
        }
    })
    export default class Editor extends Vue {
        changeTab (e) {
            this.$store.commit('changeCurrentTab', e.target.dataset.value)
        }
    }
</script>