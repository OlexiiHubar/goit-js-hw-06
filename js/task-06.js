const textInput = document.getElementById('validation-input');
const numberOfSymbol = Number(textInput.dataset.length);

textInput.addEventListener('blur', (event) => {
    if( textInput.value.length !== numberOfSymbol) {
        textInput.classList.add('invalid')
        return;
    }
    else {
        textInput.classList.add('valid')
        textInput.classList.remove('invalid')    }
})


