import './assets/base.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import vBlueWord from './components/UI/vBlueWord.vue'
import vLogo from './components/UI/vLogo.vue'
import vCheckBox from './components/UI/vCheckBox.vue'
import vButton from './components/UI/vButton.vue'

import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi'
    }
});


const app = createApp(App)

app.component('my-blue-word', vBlueWord)
app.component('my-logo', vLogo)
app.component('my-checkbox',vCheckBox)
app.component('my-button', vButton)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
