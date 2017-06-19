import Vue from 'vue'
import Vuex from 'vuex'

//Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        json: {
            pages: [
                {
                    elements: [
                        {
                            type: "checkbox",
                            name: "car",
                            title: "What car are you driving?",
                            isRequired: true,
                            choices: [
                                "None",
                                "Ford",
                                "Vauxhall",
                                "Volkswagen",
                                "Nissan",
                                "Audi",
                                "Mercedes-Benz",
                                "BMW",
                                "Peugeot",
                                "Toyota",
                                "Citroen"
                            ],
                            colCount: 4
                        }
                    ]
                }
            ]
        },
        currentTab: 'designer' // ['designer', 'json', 'test', 'embed']
    },
    // getters: {
    //     jsonString: (state, getters) => {
    //         return JSON.stringify(state.json)
    //     }
    // },
    mutations: {
        changeJSON (state, newJSON) {
            state.json = newJSON
        },
        
        changeCurrentTab (state, newTab) {
            state.currentTab = newTab
        }
    }
})

export default store