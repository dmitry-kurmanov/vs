<template>
    <div>
        Survey Designer
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    @Component
    export default class Designer extends Vue {}
    Vue.component("vse-designer-view", Designer)
</script>