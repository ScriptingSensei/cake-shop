let listCart = [];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}

checkCart();
addCartToHTML();

// function addCartToHTML() {
//     // clear data default
//     let listCartHTML = document.querySelector('.returnCart .list');
//     listCartHTML.innerHTML = '';

//     let totalQuantityHTML = document.querySelector('.totalQuantity');
//     let totalPriceHTML = document.querySelector('.totalPrice');
//     let totalQuantity = 0;
//     let totalPrice = 0;
//     // if has product in Cart
//     if (listCart) {
//         listCart.forEach(product => {
//             if (product) {
//                 let newCart = document.createElement('div');
//                 newCart.classList.add('item');
//                 newCart.innerHTML =
//                     `<img src="${product.image}">
//                     <div class="info">
//                         <div class="name">${product.name}</div>
//                         <div class="price">₹${product.price}/1 product</div>`; // Replaced $ with ₹
//                 listCartHTML.appendChild(newCart);
//                 totalQuantity = totalQuantity + product.quantity;
//                 totalPrice = totalPrice + (product.price * product.quantity);
//             }
//         })
//     }
//     totalQuantityHTML.innerText = totalQuantity;
//     totalPriceHTML.innerText = '₹' + totalPrice; // Replaced $ with ₹
// }
function addToCart(productName, productImage, productPrice, productQuantity) {
    // Add the product to the listCart array
    listCart.push({
        name: productName,
        image: productImage,
        price: productPrice,
        quantity: productQuantity
    });

    // Save the updated listCart to cookies
    document.cookie = `listCart=${JSON.stringify(listCart)}`;

    // Update the HTML to reflect the changes
    addCartToHTML();
}
addToCart('Product Name', 'product-image.jpg', 22, 5);
