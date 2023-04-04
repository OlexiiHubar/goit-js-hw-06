const inputEl = document.getElementById('font-size-control');
const spanText = document.getElementById('text')

inputEl.addEventListener('input', (event) => {
    spanText.style.fontSize = event.currentTarget.value + "px";
})

