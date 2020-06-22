let expandButton = document.querySelector('.gadgets__expand-link');
let containerElement = document.querySelector('.gadgets__slider');

expandButton.addEventListener('click', function(e) {
    e.preventDefault();
  if (expandButton.innerHTML === "Показать все") {
    expandButton.innerHTML = "Скрыть";
    expandButton.classList.add('expandlink_upside-down');
    containerElement.style.height = "unset";
  } else {
    expandButton.innerHTML = "Показать все";
    expandButton.classList.remove('expandlink_upside-down');
    containerElement.style.height = "";
  }
});