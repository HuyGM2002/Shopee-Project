const bigImage = document.querySelector('.product__img--primary').querySelector('img');
const images = document.querySelectorAll('.product__slide__img');
const title = document.querySelector('.product__title');
const price = document.querySelector('.product__price');
const sale_off = document.querySelector('.product__detail__voucher .product__detail__content');
const saled = document.querySelector('.product__saled__txt');
const star = document.querySelector('.product__star');

title.innerText = localStorage.getItem("name");
bigImage.src = localStorage.getItem("image");
price.innerText = localStorage.getItem("price");
sale_off.innerText = localStorage.getItem("sale_off");
star.innerHTML = localStorage.getItem("star");
saled.innerText = localStorage.getItem("saled");
Array.from(images).forEach(image => {
    image.src = localStorage.getItem("image");
})

const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const inputAmount = document.querySelector('.product__detail__number');
decreaseBtn.onclick = () => {
    if(eval(inputAmount.value) !== 1){
        var num = eval(inputAmount.value)-1;
        inputAmount.value = num;
    }
}
increaseBtn.onclick = () => {
    var num = eval(inputAmount.value)+1;
    inputAmount.value = num;
}

const itemImages = document.querySelectorAll('.product__slide__item');
itemImages.forEach((itemImage,index) => {
    itemImage.onmouseover = function (){
        var infoImage = itemImage.querySelector('img').src;
        bigImage.src = infoImage;
    }
})

const buttons = document.querySelectorAll('.product__detail__btn a');
const cartList = document.querySelector('.cart__list');
Array.from(buttons).forEach(button => {
    button.onclick = (e) => {
        e.preventDefault();
        button.parentElement.querySelector('.notify__success').style.display = "block";
        button.parentElement.querySelector('.notify__success').classList.add('active');
        setTimeout(()=> {
            button.parentElement.querySelector('.notify__success').style.display = "none";
        },3000)
        if(cartList.classList.contains('no-cart')){
            cartList.classList.remove('no-cart');
            var inputValue = eval(inputAmount.value);
            var priceSim = eval(localStorage.getItem("price").slice(0,localStorage.getItem("price").length - 1));
            var totalPrice = (inputValue * priceSim).toString() + '.000';
            cartList.innerHTML = `
            <div class="cart__list">
                <div class="cart__item">
                    <div class="cart__img">
                        <img src="${localStorage.getItem("image")}" alt="" width="30" height="30">
                    </div>
                    <div class="cart__info">
                        <h4 class="cart__name">${localStorage.getItem("name")}</h4>
                        <div class="cart__price">
                            <div class="cart__count">
                                <span class="cart__amount">Số lượng : ${inputValue} x </span>
                                <span class="cart__price--sim">  ${localStorage.getItem("price")}</span>
                            </div>
                            <div class="cart__total__price">${totalPrice + 'đ'}</div>
                        </div>
                        <div class="cart__other">
                            <button class="cart__buy__again">Mua lại</button>
                            <div class="cart__transport">Đang xác nhận đơn</div>
                        </div>
                    </div>
                </div>
            </div>
            `
            cartList.classList.add('has-cart');
        }
        
    }
})