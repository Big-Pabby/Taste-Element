import { createPinia } from 'pinia';
import { userData } from '~/store/userData';
import Vue from 'vue';

const pinia = createPinia()
Vue.use(pinia)



export default function ({ store, redirect}) {
    const userStore = userData()
    if(userStore.isLoggedIn == false) {
        return redirect('/login')
    }
}