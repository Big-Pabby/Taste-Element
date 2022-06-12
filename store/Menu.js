import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu's", {
    state: () => {
        return {
            menus: [
                {
                    id: 1,
                    title: 'Meat Balls',
                    image: 'meatballs.webp',
                    category: 'Meat'
                },
                {
                    id: 2,
                    title: 'Mississippi Mud Pie',
                    image: 'mississippi-mud-pie.webp',
                    category: 'Pastery'
                },

                {
                    id: 3,
                    title: 'Strawberry Rhubarb Pie',
                    image: 'strawberry-rhubarb-pie.webp',
                    category: 'Pastery'
                },

                {
                    id: 4,
                    title: 'Lobster Roll',
                    image: 'lobster-roll.webp',
                    category: 'Pastery'
                },

                {
                    id: 5,
                    title: 'Mini Corn Dogs',
                    image: 'mini-corn-dogs.webp',
                    category: 'Pastery'
                },

                {
                    id: 6,
                    title: 'Nashville Hot Chicken',
                    image: 'nashville-hot-chicken.webp',
                    category: 'Meat'
                },

                {
                    id: 7,
                    title: 'Roasted Pheasant',
                    image: 'roasted-pheasant.webp',
                    category: 'Meat'
                },

                {
                    id: 8,
                    title: 'Deep Dish Pizza Chicago',
                    image: 'deep-dish-pizza-chicago.webp',
                    category: 'Pizza'
                },

                {
                    id: 9,
                    title: 'Elk Burger',
                    image: 'elk-burger.webp',
                    category: 'Burger'
                },

                {
                    id: 10,
                    title: 'Cornmeal Johnnycakes',
                    image: 'cornmeal-johnnycakes.webp',
                    category: 'Pastery'
                },
            ],

            searchField: ''
        }
    },

    getters: {
        Menus: (state) => state.menus,
    },

    actions: {
        onSearch(search) {
            this.menus = this.menus.filter(foodMenu => {
                if(search === '') {
                    return this.menus
                } else {
                    return this.menus.type.toLowerCase().includes(search.toLowerCase())
                }  
            })
        },

        onSearchChange(search) {
            console.log(search)
            return this.searchField = search
            
        },
    }
})