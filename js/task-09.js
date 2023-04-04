const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color')

changeColorBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  console.log(getRandomHexColor())
}

