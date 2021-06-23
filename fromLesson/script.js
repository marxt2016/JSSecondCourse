const goods = [
    { price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket' },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title = 'default', price = 100) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');;
}

renderGoodsList(goods);