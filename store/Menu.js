
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu's", {
    state: () => {
        return {
            menus: [
                {
                    id: 1,
                    title: 'Meat Balls',
                    image: 'meatballs.webp',
                    category: 'Meat',
                    quantity: 1
                },
                {
                    id: 2,
                    title: 'Mississippi Mud Pie',
                    image: 'mississippi-mud-pie.webp',
                    category: 'Pastery',
                    quantity: 1
                },

                {
                    id: 3,
                    title: 'Strawberry Rhubarb Pie',
                    image: 'strawberry-rhubarb-pie.webp',
                    category: 'Pastery',
                    quantity: 1
                },

                {
                    id: 4,
                    title: 'Lobster Roll',
                    image: 'lobster-roll.webp',
                    category: 'Pastery',
                    quantity: 1
                },

                {
                    id: 5,
                    title: 'Mini Corn Dogs',
                    image: 'mini-corn-dogs.webp',
                    category: 'Pastery',
                    quantity: 1
                },

                {
                    id: 6,
                    title: 'Nashville Hot Chicken',
                    image: 'nashville-hot-chicken.webp',
                    category: 'Meat',
                    quantity: 1
                },

                {
                    id: 7,
                    title: 'Roasted Pheasant',
                    image: 'roasted-pheasant.webp',
                    category: 'Meat',
                    quantity: 1
                },

                {
                    id: 8,
                    title: 'Deep Dish Pizza Chicago',
                    image: 'deep-dish-pizza-chicago.webp',
                    category: 'Pizza',
                    quantity: 1
                },

                {
                    id: 9,
                    title: 'Elk Burger',
                    image: 'elk-burger.webp',
                    category: 'Burger',
                    quantity: 1
                },

                {
                    id: 10,
                    title: 'Cornmeal Johnnycakes',
                    image: 'cornmeal-johnnycakes.webp',
                    category: 'Pastery',
                    quantity: 1
                },
            ],

            searchMenu: [],
            category: '',
            searchField: '',
            singleMenu: {},
            cart: []
        }
    },

    getters: {
        Menus: (state) => state.menus.filter(foodMenu => {
            if(state.category === '') {
                return foodMenu
            } else {
                return foodMenu.category === state.category
            }
        }),

        getCart: (state) => state.cart,
        searchedMenu: (state) => state.searchMenu,
        fetchSingleMenu: (state) => state.singleMenu
    },

    actions: {

        onSearchChange(search) {
            this.searchField = search
            if(this.searchField === '') {
                return this.searchMenu = []
            } else {
                
                this.searchMenu = this.menus.filter(menu => {
                    return menu.title.toLowerCase().includes(this.searchField.toLowerCase())
                    
                })
            }
            
        },

        clearSearchMenu() {
            this.searchMenu = []
            this.searchField = ''
        },

        addToCart(singMenu) {
            let productInCart = this.cart.find(item => {
                return item.id === singMenu.id
            });
            if (productInCart) {
                productInCart.quantity += 1;
                return
            }
            this.cart.push(singMenu)
        },

        getSingleMenu(id) {
            this.singleMenu = this.menus.filter(menu => {
                return menu.id === id
            })
        },

        meatCategory() {
            this.category = 'Meat'
        },

        pizzaCategory() {
            this.category = 'Pizza'
        },

        burgerCategory() {
            this.category = 'Burger'
        },

        increment (cart) {
            if(cart.quantity >=1) {
                this.cart.quantity = cart.quantity++
            }
        },
    
        decrement(cartItem) {
            if(cartItem.quantity > 1) {
                this.cart.quantity = cartItem.quantity--
            }
        },
    }
})