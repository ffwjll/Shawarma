const products = [
    {
        'name': 'Классическая',
        'type': 'shawarma',
        'img': 'images/shawarma1.jpeg',
        'desc': 'Курица, лаваш, томаты, свежие огурцы, капуста, морковь, лук, кетчуп, майонез.',
        'weight': '365г',
        'price': '199₽',
        'discount': '30',
        'startPrice': '285₽',
    },
    {
        'name': 'Сырно-чесночная',
        'type': 'shawarma',
        'img': 'images/shawarma2.jpeg',
        'desc': 'Курица, лаваш, соус сырно-чесночный, томаты, огурцы, капуста, морковь, майонез.',
        'weight': '400г',
        'price': '285₽',
        'discount': '25',
        'startPrice': '385₽',
    },
    {
        'name': 'Острая',
        'type': 'shawarma',
        'img': 'images/shawarma3.jpeg',
        'desc': 'Курица, лаваш, соус острый, томаты, огурцы, капуста, морковь, лук, кетчуп, майонез.',
        'weight': '400г',
        'price': '285₽',
        'discount': '25',
        'startPrice': '385₽',
    },
    {
        'name': 'Барбекю',
        'type': 'shawarma',
        'img': 'images/shawarma4.jpeg',
        'desc': 'Курица, лаваш, соус Барбекю, томаты, огурцы, капуста, морковь, лук, майонез.',
        'weight': '365г',
        'price': '199₽',
    },
    {
        'name': 'Вегетарианская',
        'type': 'shawarma',
        'img': 'images/shawarma5.jpeg',
        'desc': 'Лаваш, томаты, свежие огурцы, капуста, морковь, лук репчатый, кетчуп, майонезный соус.',
        'weight': '240г',
        'price': '99₽',
    },
    {
        'name': 'Моцарелла',
        'type': 'shawarma',
        'img': 'images/shawarma6.jpeg',
        'desc': 'Курица, лаваш, соус сырный, сыр Моцарелла, томаты, огурцы, соус сметанно-чесночный.',
        'weight': '400г',
        'price': '285₽',
    },
    {
        'name': 'Норвежская',
        'type': 'shawarma',
        'img': 'images/shawarma7.jpeg',
        'desc': 'орель, лаваш, соус сырно-чесночный, огурцы, сыр Филадельфия, томаты, укроп.',
        'weight': '380г',
        'price': '385₽',
    },
    {
        'name': 'Острая Кимчи',
        'type': 'shawarma',
        'img': 'images/shawarma8.jpeg',
        'desc': 'Курица, лаваш, соус Барбекю, соус Кимчи, томаты, огурцы, лук красный, соус.',
        'weight': '400г',
        'price': '285₽',
    },
    {
        'name': 'Корейская',
        'type': 'shawarma',
        'img': 'images/shawarma9.jpeg',
        'desc': 'Курица, лаваш, томат, огурец, лук, морковь корейская, соус бургер, острый соус.',
        'weight': '365г',
        'price': '199₽',
    },

    {
        'name': 'Праздничный',
        'type': 'salad',
        'img': 'images/salads1.jpeg',
        'desc': 'Говядина, картофель, помидоры, сыр, сухари, майонез.',
        'weight': '500г',
        'price': '789₽',
    },
    {
        'name': 'Домашниий',
        'type': 'salad',
        'img': 'images/salads2.jpeg',
        'desc': 'Картофель, морковь, огурцы, яйцо, горошек, колбаса вареная, майонез.',
        'weight': '200г',
        'price': '325₽',
    },
    {
        'name': 'Цезарь',
        'type': 'salad',
        'img': 'images/salads3.jpeg',
        'desc': 'Грудка куриная, сыр, листья салата, помидоры, сухари, соус.',
        'weight': '250г',
        'price': '545₽',
    },
    {
        'name': 'Оливье с курой',
        'type': 'salad',
        'img': 'images/salads4.jpeg',
        'desc': 'Кура отварная, яйцо, картофель, морковь, горошек, огурцы, майонез.',
        'weight': '200г',
        'price': '399₽',
    },
    {
        'name': 'Мимоза',
        'type': 'salad',
        'img': 'images/salads5.jpeg',
        'desc': 'Картофель, морковь, горбуша горячего копчения, яйцо, майонез.',
        'weight': '500г',
        'price': '856₽',
    },
    {
        'name': 'Греческий',
        'type': 'salad',
        'img': 'images/salads6.jpeg',
        'desc': 'Огурцы, помидоры, болгарский перец, листья салата, маслины, сыр.',
        'weight': '200г',
        'price': '279₽',
    },

    {
        'name': 'Картошка фри',
        'type': 'snack',
        'img': 'images/snacks1.jpeg',
        'weight': '90г',
        'price': '99₽',
    },
    {
        'name': 'Наггетсы',
        'type': 'snack',
        'img': 'images/snacks2.jpeg',
        'weight': '120г',
        'price': '149₽',
    },
    {
        'name': 'Комбо',
        'type': 'snack',
        'img': 'images/snacks3.jpeg',
        'weight': '220г',
        'price': '225₽',
    },
    {
        'name': 'Сырные шарики',
        'type': 'snack',
        'img': 'images/snacks4.jpeg',
        'weight': '220г',
        'price': '225₽',
    },

    {
        'name': 'Сырно-чесночный',
        'type': 'sauce',
        'img': 'images/sauces1.jpeg',
        'weight': '30г',
        'price': '25₽',
    },
    {
        'name': 'Кетчуп',
        'type': 'sauce',
        'img': 'images/sauces2.jpeg',
        'weight': '30г',
        'price': '25₽',
    },
    {
        'name': 'Майонез',
        'type': 'sauce',
        'img': 'images/sauces3.jpeg',
        'weight': '30г',
        'price': '25₽',
    },

    {
        'name': 'Американо',
        'type': 'drink',
        'img': 'images/drinks1.png',
        'weight': '200мл',
        'price': '75₽',

    },
    {
        'name': 'Латте',
        'type': 'drink',
        'img': 'images/drinks1.png',
        'weight': '200мл',
        'price': '110₽',

    },
    {
        'name': 'Капучино',
        'type': 'drink',
        'img': 'images/drinks1.png',
        'weight': '200мл',
        'price': '110₽',

    },
    {
        'name': 'Эспрессо',
        'type': 'drink',
        'img': 'images/drinks1.png',
        'weight': '100мл',
        'price': '75₽',

    },
    {
        'name': 'Горячий шоколад',
        'type': 'drink',
        'img': 'images/drinks1.png',
        'weight': '200мл',
        'price': '110₽',

    },
    {
        'name': 'Черный чай',
        'type': 'drink',
        'img': 'images/drinks1.png',
        'weight': '100мл',
        'price': '25₽',

    },
    {
        'name': 'Зеленый чай',
        'type': 'drink',
        'img': 'images/drinks1.png',
        'weight': '100мл',
        'price': '25₽',

    },
]


const shawarmaContainer = document.createElement('div')
shawarmaContainer.className = 'd-flex flex-wrap justify-content-center gap-2'
const saladsContainer = document.createElement('div')
saladsContainer.className = 'd-flex flex-wrap justify-content-center gap-2'
const snacksContainer = document.createElement('div')
snacksContainer.className = 'd-flex flex-wrap justify-content-center gap-2'
const saucesContainer = document.createElement('div')
saucesContainer.className = 'd-flex flex-wrap justify-content-center gap-2'
const drinksContainer = document.createElement('div')
drinksContainer.className = 'd-flex flex-wrap justify-content-center gap-2'

const productsContainer = document.querySelector('.products-container');

productsContainer.appendChild(shawarmaContainer)
productsContainer.appendChild(saladsContainer)
productsContainer.appendChild(snacksContainer)
productsContainer.appendChild(saucesContainer)
productsContainer.appendChild(drinksContainer)


for (let i = 0; i < products.length; i++) {
    if (products[i]['type'] === 'shawarma') {
        const productEl = createProductEl(
            products[i]['img'],
            products[i]['name'],
            products[i]['desc'],
            products[i]['weight'],
            products[i]['price'],
            products[i]['discount'],
            products[i]['startPrice'],
        )
        shawarmaContainer.appendChild(productEl)
    } else if (products[i]['type'] === 'salad') {
        const productEl = createProductEl(
            products[i]['img'],
            products[i]['name'],
            products[i]['desc'],
            products[i]['weight'],
            products[i]['price'],
            products[i]['discount'],
            products[i]['startPrice'],
        )
        saladsContainer.appendChild(productEl)
    } else if (products[i]['type'] === 'snack') {
        const productEl = createProductEl(
            products[i]['img'],
            products[i]['name'],
            products[i]['desc'],
            products[i]['weight'],
            products[i]['price'],
            products[i]['discount'],
            products[i]['startPrice'],
        )
        snacksContainer.appendChild(productEl)
    } else if (products[i]['type'] === 'sauce') {
        const productEl = createProductEl(
            products[i]['img'],
            products[i]['name'],
            products[i]['desc'],
            products[i]['weight'],
            products[i]['price'],
            products[i]['discount'],
            products[i]['startPrice'],
        )
        saucesContainer.appendChild(productEl)
    } else if (products[i]['type'] === 'drink') {
        const productEl = createProductEl(
            products[i]['img'],
            products[i]['name'],
            products[i]['desc'],
            products[i]['weight'],
            products[i]['price'],
            products[i]['discount'],
            products[i]['startPrice'],
        )
        drinksContainer.appendChild(productEl)
    }


}
let productCartCount = 0
const cartCountEl = document.querySelector('.basket__num')
function updateCartCount() {
    cartCountEl.innerHTML = `${productCartCount}`
}

 hideAllProductsContainers()
    shawarmaContainer.classList.remove('d-none')

function createProductEl(img, name, desc, weight, price, discount = '', startPrice = '') {
    const productEl = document.createElement('div')
    productEl.className = 'card flex-grow-1'
    productEl.style.width = '18rem'
    productEl.style.maxWidth = '18rem'

    const productImgEl = document.createElement('img')
    productImgEl.className = 'card-img-top'
    productImgEl.src = img

    productEl.appendChild(productImgEl)

    const productCardBodyEl = document.createElement('div')
    productCardBodyEl.className = 'card-body'

    productEl.appendChild(productCardBodyEl)

    const cardBodyFirstPart = document.createElement('div')

    const productNameEl = document.createElement('h4')
    productNameEl.className = 'card-title'
    productNameEl.innerHTML = name

    productCardBodyEl.appendChild(productNameEl)

    const productDescEl = document.createElement('p')
    productDescEl.className = 'card-text m-0 mb-auto'
    if(desc){
        productDescEl.innerHTML = `${desc}`
    }

    productCardBodyEl.appendChild(productDescEl)

    const productWeightEl = document.createElement('p')
    productWeightEl.className = 'weight m-0 mb-1'
    productWeightEl.innerHTML = weight

    productCardBodyEl.appendChild(productWeightEl)

    const productBtnMenuEl = document.createElement('div')
    productBtnMenuEl.className = 'btn-menu d-flex flex-row m-0 mb-2'

    productCardBodyEl.appendChild(productBtnMenuEl)

    const productQuantityEl = document.createElement('p')
    productQuantityEl.className = 'quantity px-2 m-0'
    productQuantityEl.innerHTML = '0'

    const productBtnRemoveEl = document.createElement('button')
    productBtnRemoveEl.className = 'btn-cart btn-remove d-flex flex-column justify-content-center align-items-center p-0 '
    productBtnRemoveEl.innerHTML = '-'

    productBtnRemoveEl.addEventListener("click", function () {
        const current = parseInt(productQuantityEl.innerHTML)
        if (current === 0) {
            return
        }
        productCartCount--
        productQuantityEl.innerHTML = `${current - 1}`
        updateCartCount()
    })

    productBtnMenuEl.appendChild(productBtnRemoveEl)

    productBtnMenuEl.appendChild(productQuantityEl)

    const productBtnAddEl = document.createElement('button')
    productBtnAddEl.className = 'btn-cart btn-add d-flex flex-column justify-content-center align-items-center p-0 '
    productBtnAddEl.innerHTML = '+'
    productBtnAddEl.addEventListener("click", function () {
        const current = parseInt(productQuantityEl.innerHTML)
        productQuantityEl.innerHTML = `${current + 1}`
        productCartCount++
        updateCartCount()
    })

    productBtnMenuEl.appendChild(productBtnAddEl)

    const productMenuEl = document.createElement('div')
    productMenuEl.className = 'menu d-flex flex-row'
    productMenuEl.style.height = '30px'

    productCardBodyEl.appendChild(productMenuEl)

    const productPriceMenuEl = document.createElement('div')
    productPriceMenuEl.className = 'menu d-flex flex-row'
    productPriceMenuEl.style.width = '220px'

    productMenuEl.appendChild(productPriceMenuEl)

    const productPriceEl = document.createElement('p')
    productPriceEl.className = 'price m-0 text-nowrap'
    productPriceEl.innerHTML = price
    productPriceEl.style.width = '60px'


    productPriceMenuEl.appendChild(productPriceEl)

    const productDiscountEl = document.createElement('p')
    productDiscountEl.className = 'discount m-0'
    if(discount){
        productDiscountEl.innerHTML = `-${discount}%`
    }

    productPriceMenuEl.appendChild(productDiscountEl)

    const productStartPriceEl = document.createElement('p')
    productStartPriceEl.className = 'start-price m-0'
    productStartPriceEl.innerHTML = startPrice

    productCardBodyEl.appendChild(productStartPriceEl)


    return productEl
}

function hideAllProductsContainers() {
    shawarmaContainer.classList.add('d-none')
    saladsContainer.classList.add('d-none')
    snacksContainer.classList.add('d-none')
    saucesContainer.classList.add('d-none')
    drinksContainer.classList.add('d-none')
}

const btnShawarma = document.querySelector('.nav-shawarma');
btnShawarma.addEventListener('click', () => {
    hideAllProductsContainers()
    shawarmaContainer.classList.remove('d-none')
})
const btnSalads = document.querySelector('.nav-salads');
btnSalads.addEventListener('click', () => {
    hideAllProductsContainers()
    saladsContainer.classList.remove('d-none')
})
const btnSnacks = document.querySelector('.nav-snacks');
btnSnacks.addEventListener('click', () => {
    hideAllProductsContainers()
    snacksContainer.classList.remove('d-none')
})
const btnSauces = document.querySelector('.nav-sauces');
btnSauces.addEventListener('click', () => {
    hideAllProductsContainers()
    saucesContainer.classList.remove('d-none')
})
const btnDrinks = document.querySelector('.nav-drinks');
btnDrinks.addEventListener('click', () => {
    hideAllProductsContainers()
    drinksContainer.classList.remove('d-none')
})

