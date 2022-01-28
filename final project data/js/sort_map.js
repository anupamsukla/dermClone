var selected = document.querySelector("#short").value;


function sort_by_name(arr) {
    let newArr = [...arr];
    for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr.length - i - 1; j++) {
            str1 = newArr[j].product_name
            str2 = newArr[j + 1].product_name
            if (str1 > str2) {
                temp = newArr[j]
                newArr[j] = newArr[j + 1]
                newArr[j + 1] = temp
            }
        }
    }
    return newArr;
}

function sort_by_namerev(arr) {
    let newArr = [...arr];
    for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr.length - i - 1; j++) {
            str1 = newArr[j].product_name
            str2 = newArr[j + 1].product_name
            if (str1 < str2) {
                temp = newArr[j]
                newArr[j] = newArr[j + 1]
                newArr[j + 1] = temp
            }
        }
    }
    return newArr;
}

function mapping_data(arr) {
    let newArr = [...arr];
    newArr.map(function (elm) {
        var div = document.createElement("div");
        div.setAttribute("class", "product_div");
        var image = document.createElement("img");
        image.setAttribute("src", elm.image);
        image.setAttribute("width", "100%");
        image.setAttribute("height", "70%");
        var name = document.createElement("p")
        name.textContent = elm.product_name;
        var rating = document.createElement("p")
        rating.textContent = elm.rating + " " + elm.review;

        rating.setAttribute("class", "bold")

        var price = document.createElement("p")
        price.textContent = "$" + elm.price;
        price.setAttribute("id", "price");
        price.setAttribute("class", "bold")

        id_value = elm.product_name
        var btn = document.createElement("button");
        btn.textContent = "QUICK BUY";
        btn.setAttribute("id", id_value);
        btn.addEventListener("click", add_to_cart);

        div.append(image, name, rating, price, btn);
        document.querySelector(".container").append(div);
    })
}

function sortPrice() {
    let newArr = [...mensdata];

    var selected = document.querySelector("#short").value;
    document.querySelector(".container").textContent = "";
    if (selected == "1") {
        newArr.sort(function (a, b) {
            return a.product_id - b.product_id;
        });
    } else if (selected == "2") {
        newArr.sort(function (a, b) {
            return b.review - a.review;
        });
    } else if (selected == "3") {
        newArr.sort(function (a, b) {
            return b.price - a.price;
        });
    } else if (selected == "4") {
        newArr.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (selected == "5") {
        newArr = sort_by_name(newArr)
    } else if (selected == "6") {
        newArr = sort_by_namerev(newArr)
    }

    mapping_data(newArr)
}

var selected = document.querySelector("#short").value;

mapping_data(mensdata)


document.querySelector('#short').addEventListener('change', sortPrice)
var cart_data = JSON.parse(localStorage.getItem('Cart')) || []

//add to cart fuction starts here
function add_to_cart(event) {
    var cart_data = JSON.parse(localStorage.getItem('Cart')) || []

    var productName = event.target.id;
    var length = cart_data.length;
    var match = false;
    for (var i = 0; i < length; i++) {
        if (cart_data[i].product_name == productName) {
            cart_data[i].qty++;
            var match = true;
            break;
        }
    }
    if (!match) {
        var obj = {};
        var previousSibling = event.target.previousElementSibling;

        obj['price'] = previousSibling.textContent.slice(1) * 1;
        var previousSibling = previousSibling.previousElementSibling;
        var previousSibling = previousSibling.previousElementSibling;
        obj['product_name'] = previousSibling.textContent;
        var previousSibling = previousSibling.previousElementSibling;
        obj['image'] = previousSibling.src;
        obj['qty'] = 1;
        cart_data.push(obj);
    }
    localStorage.setItem('Cart', JSON.stringify(cart_data));
}

mensdata.map(function (elm) {
    var div = document.createElement("div");
    div.setAttribute("class", "product_div");

    var image = document.createElement("img");
    image.setAttribute("src", elm.image);
    image.setAttribute("width", "100%");
    image.setAttribute("height", "70%");


    var name = document.createElement("p")
    name.textContent = elm.product_name;

    var rating = document.createElement("p")
    rating.textContent = elm.rating + " " + elm.review;
    rating.setAttribute("class", "bold")
    rating.style.fontWeight = 300

    var price = document.createElement("p")
    price.textContent = "$" + elm.price;
    price.setAttribute("id", "price");
    price.setAttribute("class", "bold")
    price.style.fontWeight = 300


    var btn = document.createElement("button");
    btn.textContent = "QUICK BUY";


    div.append(image, name, rating, price, btn);

    document.querySelector(".container").append(div);
})

document.querySelectorAll('.some-class').forEach(item => {
    item.addEventListener('click', event => {
        //handle click
    })
})

////0pen product details page.........
var x = document.querySelectorAll(".product_div >img,.product_div >p");
x.forEach(function (item) {
    item.addEventListener('click', openProduct);
});

function openProduct(elem) {
    var obj = {};
    var product = elem.target.parentNode.firstElementChild;

    obj['img'] = product.src;
    product = product.nextElementSibling;
    obj['name'] = product.textContent;
    product = product.nextElementSibling;
    obj['ratings'] = product.textContent;
    product = product.nextElementSibling;
    obj['price'] = product.textContent;
    localStorage.setItem('product', JSON.stringify(obj));

    window.location.href = "product_description_page.html"

}





