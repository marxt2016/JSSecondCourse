const API2_JSON = 'https://fakestoreapi.com/products?_limit';

// The shopping cart component

Vue.component('shoppingcart', {
    props: ['items'],
    qty: 1,
    computed: {
        Total() {
            let total = 0;
            this.items.forEach(item => {
                total += (item.price * item.qty);
            });
            return total;
        },
    },

    methods: {
        removeItem(id) {
            this.items.splice(id, 1)
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        searchLine: '',
        show: false,
        cartItems: [],
    },

    methods: {
        addToCart(idToAdd) {
            let itemInCart = this.cartItems.filter(item => item.id === idToAdd.id);
            let isItemInCart = itemInCart.length > 0;
            if (!isItemInCart) {
                this.cartItems.push({ ...idToAdd, qty: 1 });
            } else {
                itemInCart[0].qty++;
            }
            idToAdd.qty = 1;
        },

    },

    mounted() {
        fetch(API2_JSON)
            .then(res => res.json())
            .then(json => {
                this.goods = json;
            });

    },
    computed: {
        search() {
            return this.goods.filter(good => {
                return good.title.toLowerCase().includes(this.searchLine.toLowerCase())
            });
        }
    }

});







