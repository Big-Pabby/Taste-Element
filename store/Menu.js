
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu's", {
    state: () => {
        let cart = localStorage.getItem('cart')
        let getMenu = localStorage.getItem('getMenu')
        return {
            menus: [
                {
                    id: 1,
                    title: 'Meat Balls',
                    image: 'meatballs.webp',
                    category: 'Meat',
                    price: 20,
                    quantity: 1
                },
                {
                    id: 2,
                    title: 'Mississippi Mud Pie',
                    image: 'mississippi-mud-pie.webp',
                    category: 'Pastery',
                    price: 30,
                    quantity: 1
                },

                {
                    id: 3,
                    title: 'Strawberry Rhubarb Pie',
                    image: 'strawberry-rhubarb-pie.webp',
                    category: 'Pastery',
                    price: 45,
                    quantity: 1
                },

                {
                    id: 4,
                    title: 'Lobster Roll',
                    image: 'lobster-roll.webp',
                    category: 'Pastery',
                    price: 15,
                    quantity: 1
                },

                {
                    id: 5,
                    title: 'Mini Corn Dogs',
                    image: 'mini-corn-dogs.webp',
                    category: 'Pastery',
                    price: 15,
                    quantity: 1
                },

                {
                    id: 6,
                    title: 'Nashville Hot Chicken',
                    image: 'nashville-hot-chicken.webp',
                    category: 'Meat',
                    price: 15,
                    quantity: 1
                },

                {
                    id: 7,
                    title: 'Roasted Pheasant',
                    image: 'roasted-pheasant.webp',
                    category: 'Meat',
                    price: 75,
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
                    price: 50,
                    quantity: 1
                },

                {
                    id: 10,
                    title: 'Cornmeal Johnnycakes',
                    image: 'cornmeal-johnnycakes.webp',
                    category: 'Pastery',
                    price: 100,
                    quantity: 1
                },
            ],

            searchMenu: [],
            category: '',
            searchField: '',
            singleMenu: getMenu ? JSON.parse(getMenu) : {},
            cart: cart ? JSON.parse(cart) : [],
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
        fetchSingleMenu: (state) => state.singleMenu,
        cartTotalPrice: (state) => {
            let total = 0;
            state.cart.forEach(item => {
                total += item.price * item.quantity;
            });
            return total 
        },
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

        saveCart() {
            localStorage.setItem("cart", JSON.stringify(this.cart));
            localStorage.setItem("getMenu", JSON.stringify(this.singleMenu));
        },

        addToCart(singMenu) {
            let productInCart = this.cart.find(item => {
                return item.id === singMenu.id
            });
            if (productInCart) {
                productInCart.quantity += 1;
                return
            } else {
                this.cart.push(singMenu)
            }

            this.saveCart()
            
        },

        deleteCart(id) {
            this.cart = this.cart.filter(item => {
                return item.id !== id
            })

            this.saveCart()
        },

        getSingleMenu(id) {
            this.singleMenu = this.menus.filter(menu => {
                return menu.id === id
            })

            this.saveCart()
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
    },

    persist: true,
})