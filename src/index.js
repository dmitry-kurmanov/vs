import Vue from 'vue'
import App from './App.vue'
import store from './store'

export class Instance {
    constructor(rootSelector = null, options = null) {
        this.surveyjs = new Vue({
            el: rootSelector,
            store,
            render: h => h( App, {
                props: {
                    options: options
                }
            })
        })
    }
}


export { default as Designer } from './views/Designer.vue'