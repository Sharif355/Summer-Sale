function getInputValueById(inputId) {
    const valueById = document.getElementById(inputId)
    const inputValue = valueById.value;
}

function getTextValueById(textId) {
    const textValueById = document.getElementById(textId)
    const textValue = textValueById.innerText;
}

function setElementById(elementId, element) {
    const elementById = document.getElementById(elementId);
    elementById.innerText = element;
}

function cardText(text) {
    const textValue = text.parentNode.childNodes[3].childNodes[3].childNodes[11].innerText;
    const p = document.createElement('li');
    p.innerText = textValue;
    const setElement = document.getElementById('coupon-cart');
    setElement.appendChild(p);
    setElementById('coupon-cart', textValue)
}