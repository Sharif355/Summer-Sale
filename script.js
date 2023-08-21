
let totalPrice = 0;

function textValueById(inputId) {
    const textValue = document.getElementById(inputId);
    const value = parseFloat(textValue.innerText);
    return value;
}

function setElementById(elementId, element) {
    const elementById = document.getElementById(elementId);
    elementById.innerText = element;
}

function addToCardText(text, price) {

    const setElement = document.getElementById('coupon-cart');
    const count = setElement.childElementCount
    const p = document.createElement('p');
    p.innerText = `${count + 1}. ${text}`;

    setElement.appendChild(p);
    totalPrice += price;
    setElementById('total-price', totalPrice.toFixed(2))
    const applyButton = document.getElementById('apply-button')
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled', false);
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    const purchaseButton = document.getElementById('btn-purchase');

    if (totalPrice > 0) {
        purchaseButton.removeAttribute('disabled', false);
    } else {
        purchaseButton.setAttribute('disabled', true);
    }
}

function clearCart() {
    const couponCartElement = document.getElementById('coupon-cart')
    const totalPrice = document.getElementById('total-price')
    const discountPrice = document.getElementById('discount-price')
    const finalPrice = document.getElementById('final-price')
    const inputElement = document.getElementById('input-field')
    couponCartElement.innerHTML = ''
    totalPrice.innerText = ''
    discountPrice.innerText = ''
    finalPrice.innerText = ''
    inputElement.value = ''
}

function clearToHome() {
    clearCart()
}

function btnApply() {

    const priceTotal = textValueById('total-price');
    const inputElement = document.getElementById('input-field');
    const inputValue = inputElement.value;

    if (inputValue !== 'SELL200') {
        alert('Please insert SELL200');
        return;
    }
    const discount = (priceTotal * 20) / 100;
    const finalPrice = priceTotal - discount;

    setElementById('discount-price', discount.toFixed(2));
    setElementById('final-price', finalPrice.toFixed(2));
}


// card 1
function card1(value) {
    const textValue = value.querySelector(".text-xl").innerText;
    const textNum = parseFloat(value.querySelector('.text-lg').innerText);
    addToCardText(textValue, textNum)
}
// card 2
function card2(value) {
    const textValue = value.querySelector('.text-xl').innerText;
    const textNum = parseFloat(value.querySelector('.text-lg').innerText);
    addToCardText(textValue, textNum);
}

// card 3
function card3(value) {
    const textValue = value.querySelector('.text-xl').innerText;
    const textNum = parseFloat(value.querySelector('.text-lg').innerText);
    addToCardText(textValue, textNum)
}
// card 4
function card4(value) {
    const textValue = value.querySelector('.text-xl').innerText;
    const textNum = parseFloat(value.querySelector('.text-lg').innerText);
    addToCardText(textValue, textNum)
}
// card 5
function card5(value) {
    const textValue = value.querySelector('.text-xl').innerText;
    const textNum = parseFloat(value.querySelector('.text-lg').innerText);
    addToCardText(textValue, textNum)
}
// card 6
function card6(value) {
    const textValue = value.querySelector('.text-xl').innerText;
    const textNum = parseFloat(value.querySelector('.text-lg').innerText);
    addToCardText(textValue, textNum)
}
// card 7
function card7(value) {
    const textValue = value.querySelector('.text-xl').innerText;
    const textNum = parseFloat(value.querySelector('.text-lg').innerText);
    addToCardText(textValue, textNum)
}
// card 8
function card8(value) {
    const textValue = value.querySelector('.text-xl').innerText;
    const textNum = parseFloat(value.querySelector('.text-lg').innerText);
    addToCardText(textValue, textNum)
}
// card 9
function card9(value) {
    const textValue = value.querySelector('.text-xl').innerText;
    const textNum = parseFloat(value.querySelector('.text-lg').innerText);
    addToCardText(textValue, textNum)
}
