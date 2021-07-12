const API2_JSON = 'https://fakestoreapi.com/products?_limit';

const hostBus = new Vue();

// The shopping cart component

Vue.component('shoppingcart', {
    props: ['items'],

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
        removeItem(idx) {
            this.items.splice(idx, 1)
        }
    }
})
//--------goods list 
Vue.component('goodslist', {
    props: ['search'],

    methods: {
        addToCart(good) {
            this.$emit('add-to-cart', good);
        }
    }
})

//---------goods list

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
                console.log(this.cartItems);
                console.log(itemInCart[1]);
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
    },
    created() {
        hostBus.$on('add-to-cart', this.addToCart);
    },
    beforeDestroy() {
        hostBus.$off('add-to-cart');
    }

});
