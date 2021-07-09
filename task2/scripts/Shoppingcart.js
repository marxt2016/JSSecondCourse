
const addToCart = document.querySelector('.to_cart');
const cart = document.querySelector('.cart');
const shoppingcart = document.querySelector('.shoppingcart');
const counter = document.querySelector('.circle');
const totalCart = document.querySelector('.total_cart');
const totalCartSum = document.querySelector('.counter_total');

cart.addEventListener('click', function () {
    shoppingcart.classList.toggle('none');
})

/**
 * Class describes Shoppingcart Item object
 *
 */
class shoppingcartItem {
    constructor(price, quantity) {
        this.price = price;
        this.quantity = quantity;
    }
}
/**
 * Class describes Shoppingcart object
 * 
 */
class Shoppingcart {

    constructor() {
        this.items = [];
    }

    /**
    * Add element with quantity = 1 to array
    * @param {number} pruductID product ID
    */
    addItem(productID) {
        this.items.push(new shoppingcartItem(
            productList.products[productID].price,
            1,
        ))
    }

    /**
   * Create markup for each added item in the shopping cart table 
   * @param {number} pruductID pruductID product ID
   */
    renderNewItem(productID) {
        let productInRow = `
        <div class="table_row">
            <div>${productList.products[productID].name}</div>
            <div>
                <span class="items_quantity" data-prod_id="${productID}">1</span>
            </div>
            <div>$${productList.products[productID].price}</div>
            <div>
                $<span class="items_price" data-prod_id="${productID}">${productList.products[productID].price}</span>
            </div>
        </div>
    `;
        totalCart.insertAdjacentHTML("beforebegin", productInRow);
    }
    /**
       * Check if item already exists - increase Quantity, otherwise add new Item and increase counter in circle
       * @param {number} pruductID pruductID product ID
       */
    adjustProductQuantity(productID) {
        let itemInBasket = document.querySelector(`.items_quantity[data-prod_id="${productID}"]`);
        if (itemInBasket) {
            itemInBasket.textContent++;

        } else {
            shopcart.renderNewItem(productID);
            counter.textContent++;
        }
    }
    /**
     * Calculate total amount per item in the row
     */
    calculateRowTotal(productID) {
        let rowTotalAmount = document.querySelector(`.items_price[data-prod_id="${productID}"]`);
        let itemQuantity = document.querySelector(`.items_quantity[data-prod_id="${productID}"]`).textContent;

        let rowSum = (itemQuantity * productList.products[productID].price).toFixed(2);
        rowTotalAmount.textContent = rowSum;
    }

    /**
       * Calculate total shopping cart amount
       */
    calculateTotal() {
        let totalSum = 0;
        for (let i = 0; i < shopcart.items.length; i++) {
            totalSum += shopcart.items[i].price * shopcart.items[i].quantity;
        }
        totalCartSum.textContent = totalSum.toFixed(1);
    }
}

let shopcart = new Shoppingcart();

function addProductToShoppingcart(productID) {
    shopcart.addItem(productID);
    shopcart.adjustProductQuantity(productID);
    shopcart.calculateRowTotal(productID);
    shopcart.calculateTotal();
}
