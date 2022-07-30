
import { defineStore } from "pinia";


export const userData = defineStore("user", {
    state: () => {
        return {
            user: {},
            isLoggedIn: false,
        }
    },

    getters: {
        getUserData: (state) => state.user,
    },

    actions: {
        logUser(user) {
            this.user = user;
            this.isLoggedIn = true;
        },
        logoutUser() {
            this.user = {};
            this.isLoggedIn = false;
        },


    }
})