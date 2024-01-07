var totalCartAmount = 0;
window.addEventListener('click', function(event) {
  let counter;

  // находим родителя
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');
  }

  // +
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText
  }

  // -
  if (event.target.dataset.action === 'minus') {
    if (counter.innerText > 1){
      counter.innerText = --counter.innerText
    }
  }

  
// добавление циферки в корзину
  if (event.target.dataset.action === 'buy') {
    // находим родителя
    const basketClosest = event.target.closest('.all_product');
    // находим ребенка
    const basketPrev = basketClosest.querySelector('.counter-wrapper');
    const basketB = basketPrev.querySelector('[data-counter=""]');
    // вычисляем количество для корзины
    document.querySelector('[data-action="count"]').innerHTML = parseInt(document.querySelector('[data-action="count"]').innerHTML) + parseInt(basketB.innerHTML);

    // вычисляем деньги
    const price = basketClosest.querySelector('.product_price');
    const priceAlon = parseInt(price.innerHTML)*parseInt(basketB.innerHTML);
    totalCartAmount = totalCartAmount + priceAlon;
    document.querySelector('[data-action="total"]').innerHTML = totalCartAmount;

  }
});