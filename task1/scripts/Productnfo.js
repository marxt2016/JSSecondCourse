
const featuredItemElement = document.querySelector('.featured');

/**
 * Class describes Product object
 * @param {number} id productID
 * @param {string} img image file name
 * @param {string} name name
 * @param {number} price price
 * @param {string} description discription
 *
 */
class ProductInfo {
    constructor(id, img, name, price, description) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

/**
 * This is products array
 */
const products = [
    new ProductInfo(
        0,
        '0.jpg',
        'Mango People T-shirt 1',
        100.99,
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    ),
    new ProductInfo(
        1,
        '1.jpg',
        'Mango People T-shirt 2',
        99.99,
        'Consectetue Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    ),
    new ProductInfo(
        2,
        '2.jpg',
        'Mango People T-shirt 3',
        9.99,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    ),
    new ProductInfo(
        3,
        '0.jpg',
        'Product 4',
        100.99,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    ),
    new ProductInfo(
        4,
        '1.jpg',
        'Product 5',
        99.99,
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
    ),
    new ProductInfo(
        5,
        '2.jpg',
        'Product 6',
        9.99,
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
    ),
]

/**
 * @param {ProductInfo} product from products array
 * @returns {string} html markup for creating product card
 */

function createProductCardMarkup(product) {
    return `

    <div class="featured_item">
             <a class="image_featured" href="#">
                <img class="image_item" src="img/${product.img}" alt="${product.id}">
                <div class="featured_name_price">
                    <p class="featured_item_text">${product.name}</p>
                    <p class="featured_item_text small"> ${product.description}</p>
                    <p class="featured_item_price">$${product.price}</p>
                </div>
            </a>
            <div class="to_cart">
                <a class="button_to_cart" href="#">
                    <img src="img/Cart_white.png" alt="cart_white">
                    <p class="to_cart_text">Add to Cart</p>
                </a>
            </div>
        </div>
    `;
}

/**
 * @param {ProductInfo[]} products products array
 * @param {HTMLDivElement} featuredItemElement element to insert product item inside 
 */

function insertCardItems(products, featuredItemElement) {
    let productCard = '';
    for (item of products) {
        productCard += createProductCardMarkup(item);
    }
    featuredItemElement.insertAdjacentHTML('afterbegin', productCard);
}

insertCardItems(products, featuredItemElement);

