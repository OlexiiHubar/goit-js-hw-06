const inUserName = document.getElementById('name-input');
const outputUserName = document.getElementById('name-output');

inUserName.addEventListener('input', () => {
    if (inUserName.value === "") {
            return outputUserName.textContent = "Anonymus"
    }
    return outputUserName.textContent= inUserName.value;
});
