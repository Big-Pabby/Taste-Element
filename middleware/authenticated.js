import { createPinia } from 'pinia';
import { userData } from '~/store/userData';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import Vue from 'vue';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
Vue.use(pinia)



export default function ({ store, redirect}) {
    const userStore = userData()
    if(userStore.isLoggedIn == false) {
        return redirect('/login')
    }
}