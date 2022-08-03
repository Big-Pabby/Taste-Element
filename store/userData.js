
import { defineStore } from "pinia";


export const userData = defineStore("user", {
    state: () => {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            isLoggedIn: JSON.parse(localStorage.getItem('authUser')),
        }
    },

    getters: {
        getUserData: (state) => state.user,
    },

    actions: {
        logUser(user, auth) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            this.isLoggedIn = auth;
            localStorage.setItem('authUser', JSON.stringify(auth))
        },
        logoutUser() {
            localStorage.removeItem('authUser')
            localStorage.removeItem('user')
            this.isLoggedIn = false;
            this.user = {};
            
        },


    }
})