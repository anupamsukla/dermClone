    //mapping data
    var obj1 = JSON.parse(localStorage.getItem('product'));
    document.querySelector("#image").src = obj1['img'];
    document.querySelector("#product_name").textContent = obj1['name'];
    document.querySelector("#ratings").textContent = obj1['ratings'];
    document.querySelector(".product_price").textContent = obj1['price'];
    document.querySelector("#product-page-reward").textContent = Math.floor((obj1['price'].slice(1))*5);
    //mapping data


    //increment decrement
    document.querySelector("#subtract").addEventListener('click', subtractQuantity);
    document.querySelector("#add").addEventListener('click', addQuantity);

    function subtractQuantity() {
        if (((document.querySelector("#count").textContent) * 1) > 1) {
            document.querySelector("#count").textContent = ((document.querySelector("#count").textContent) * 1) - 1;
        }
    }

    function addQuantity() {
        document.querySelector("#count").textContent = ((document.querySelector("#count").textContent) * 1) + 1;
    }
    //increment decrement




    //add to cart fuction starts here
    document.querySelector('#addToCart').addEventListener('click', add_to_cart);

    function add_to_cart() {
        var cart_data = JSON.parse(localStorage.getItem('Cart')) || []

        var productName = document.querySelector("#product_name").textContent;
        var length = cart_data.length;
        var match = false;

        for (var i = 0; i < length; i++) {
            if (cart_data[i].product_name == productName) {

                cart_data[i].qty = (document.querySelector("#count").textContent * 1) + cart_data[i].qty;
                var match = true;
                console.log((document.querySelector("#count").textContent * 1) + cart_data[i].qty)
                break;
            }
        }
        if (!match) {
            var obj = {
                price: document.querySelector(".product_price").textContent.slice(1),
                product_name: document.querySelector("#product_name").textContent,
                image: document.querySelector("#image").src,
                qty: ((document.querySelector("#count").textContent) * 1)
            };
            cart_data.push(obj);
        }

        localStorage.setItem('Cart', JSON.stringify(cart_data));
        window.location.href = "cart.html";
    }
    // Add to cart fuction ends here
