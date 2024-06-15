const login = document.querySelector('.header__navbar-item__login');
const register = document.querySelector('.header__navbar-item__register');
const modal = document.querySelector('.modal');
const registerForm = document.querySelector('.auth-form__register');
const loginForm = document.querySelector('.auth-form__login');
const overlay = document.querySelector('.modal_overlay');
const back = document.querySelectorAll('.btn__back');
const loginSwt = document.querySelector('.auth_form__sw-btn__login');
const registerSwt = document.querySelector('.auth_form__sw-btn__register');
const app = document.querySelector('.app__content');
login.addEventListener('click', function () {
    modal.style.display = "flex";
    loginForm.style.display = "block";
    registerForm.style.display = "none";
})
register.addEventListener('click', function () {
    modal.style.display = "flex";
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
})
overlay.addEventListener('click', function () {
    modal.style.display = 'none';
})
back.forEach(function (ele, ind) {
    ele.addEventListener('click', function () {
        modal.style.display = 'none';
    })
})
loginSwt.addEventListener('click', function () {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
})
registerSwt.addEventListener('click', function () {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
})

/* Lọc shop */
var ind = 0;
const itemShop = document.querySelectorAll('.header__option-item');
const shopSelect = document.querySelector('.header__search_-text');
itemShop.forEach(function (item, index) {
    item.addEventListener('click', function () {
        const tick = item.querySelector('.tick');
        const oldTick = itemShop[ind].querySelector('.tick');
        oldTick.innerHTML = '';
        tick.innerHTML = '<i class="fas fa-check"></i>';
        ind = index;
        const text = item.querySelector('.header__option__text').innerText;
        // shopSelect.innerText = text;
        shopSelect.innerText = `${text}`;
    });
})

/*Search lại lịch sử */

var inputSearch = document.querySelector('.header__search-input');
const listOfHistory = document.querySelectorAll('.header__search-item');
listOfHistory.forEach(function (element, index) {
    element.addEventListener('click', function () {
        let textSearch = element.querySelector('.header__seatch-item__link').innerText;
        console.log(textSearch);
        inputSearch.value = textSearch;
    })
})

/* Tạo QC */
const slider = document.querySelector('.slider__slide__content');
var arrSlide = ["./img/slide/slide1.jpg", "./img/slide/slide2.png", "./img/slide/slide3.png",
    "./img/slide/slide4.png", "./img/slide/slide5.png"];
var i = 1;
var lengthS = arrSlide.length;
setInterval(function () {
    slider.style.backgroundImage = `url(${arrSlide[i]})`;
    if (i == lengthS - 1) {
        i = 0;
    }
    else {
        ++i;
    }
}, 3000);
var index = 1;
const listCat = document.querySelectorAll('.home-filter__btn');
listCat.forEach(function (ele, ind) {
    ele.addEventListener('click', function () {
        Object.assign(listCat[index].style, {
            backgroundColor: '#fff',
            color: '#333'
        });
        index = ind;
        Object.assign(ele.style, {
            backgroundColor: '#ee4d2d',
            color: 'white'
        });
    })
})
const searchBtn = document.querySelector('.header__search-btn');
searchBtn.onclick = () => {

}
const inputBox = document.querySelector('.header__search-input');
const itemSearch = document.querySelectorAll('.header__search-item');
itemSearch.forEach((element, index) => {
    element.onmousedown = () => {
        // console.log(element.innerText)
        inputBox.value = element.innerText;
    }
})

var numberPage = document.querySelector('.home-filter__page-current').innerText;
var navigates = document.querySelectorAll('.home-filter__page-btn');
var Page = Number(numberPage);
navigates.forEach((navigate, index) => {
    navigate.onclick = e => {
        e.preventDefault();
        if (index === 0) {
            if (Page === 1) {
                Page = 14;
            }
            else {
                --Page;
            }
        }
        else {
            if (Page === 14) {
                Page = 1;
            }
            else {
                ++Page;
            }
        }
        document.querySelector('.home-filter__page-current').innerText = Page;
    }
})

/*
    Xử lý xổ notify khi see more
*/
const notifyFooter = document.querySelector('.header__footer');
const notify = document.querySelector('.header__navbar-item-none');
const notifyPane = document.querySelector('.header__motify');


function handleExpand(bool, element) {
    if (bool) {
        element.style.height = '500px';
        notifyFooter.querySelector('.header-btn').innerText = 'Ẩn bớt';
    }
    else {
        element.style.height = '248px';
        notifyFooter.querySelector('.header-btn').innerText = 'Xem tất cả';
    }
}
var swt = true;
notifyFooter.onclick = function (e) {
    e.preventDefault();
    const notifyList = document.querySelector('.header__notify_list');
    handleExpand(swt, notifyList);
    swt = !swt;
}


const filterPrice = document.querySelector('.input-sec-input__label');
// console.log(filterPrice)
const optionsPrice = document.querySelectorAll('.sec-input__list-item');
optionsPrice.forEach(option => {
    option.onclick = (e) => {
        e.preventDefault();
        filterPrice.innerText = option.innerText;
    }
})


// ( 7.(KHÓ) Tạo Trang có chức năng để mua(Thêm giỏ hàng) cho từng sản phẩm khi click vào
const products = document.querySelectorAll('.gird__column-2-4');
Array.from(products).forEach(function (product, index) {
    product.addEventListener('click', function () {
        var lastChar = product.querySelector('.home-product-item__img').style.backgroundImage.lastIndexOf('"');
        var Data = {
            name: product.querySelector('.home-product-item__name').innerText,
            image: product.querySelector('.home-product-item__img').style.backgroundImage.slice(5, lastChar),
            price: product.querySelector('.home-product-item__price-current').innerText,
            sale_off: product.querySelector('.home-product-item__sale-off-percent').innerText,
            star: product.querySelector('.home-product-item__rating').innerHTML,
            saled: product.querySelector('.home-product-item__sold').innerText
        }
        localStorage.setItem("name", Data.name);
        localStorage.setItem("image", Data.image);
        localStorage.setItem("price", Data.price);
        localStorage.setItem("sale_off", Data.sale_off + " GIẢM");
        localStorage.setItem("star", Data.star);
        localStorage.setItem("saled", Data.saled);
    });
})
const inputList = document.querySelector('.header__search-history-list');
searchBtn.onclick = function (){
    const valueInput = inputSearch.value;
    if(valueInput !== ''){
        localStorage.setItem("inputValue",valueInput);
        inputList.innerHTML += `
            <li class="header__search-item">
                <a href="" class="header__seatch-item__link">${localStorage.getItem("inputValue")}</a>
            </li>
        `
    }
}
/*
    List CV HTML , CSS : 
        1 . Loại xem thêm ngang của Shopee
        2 . Danh mục ngang có ảnh đàng hoàng
        3 . 3 Voucher giảm giá
        4 . Thêm nhiều sản phẩm cho trang web phong phú
        5 . Footer Giấy tờ đăng ký 


    List CV : JS  
    Advan 1 : 
    ( 7.(KHÓ) Tạo Trang có chức năng để mua(Thêm giỏ hàng) cho từng sản phẩm khi click vào
    ( 4. Chèn sản phẩm vào giỏ hàng khi + (Ko bắt buộc)
    Advan 2 :       
        ( 2.Có chức năng bấm và hiện nội dung lên input - đồng thời
            lọc ra sản phẩm phù hợp theo input (Ko bắt buộc)
        ( 3 . Tạo chức năng lọc ở Danh mục sao cho ra sản phẩm
            phù hợp
    Advan 3 : 
            5. Thêm chức năng xếp giá cho bộ lọc giá như yêu cầu
*/