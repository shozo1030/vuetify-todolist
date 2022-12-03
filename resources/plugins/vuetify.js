// Vuetify自体を登録する必要があります
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi', // 追加
    },
}

export default new Vuetify(opts)