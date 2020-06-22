let expandButton = document.querySelector('.content__expand-link');
let containerElement = document.querySelector('.content__additional-text');

expandButton.addEventListener('click', e => {
    e.preventDefault();
    if (expandButton.innerHTML === "Читать далее") {
        expandButton.innerHTML = "Скрыть";
        expandButton.classList.add('expandlink_upside-down');
        containerElement.classList.remove('content__additional-text_hidden');
      } else {
        expandButton.innerHTML = "Читать далее";
        expandButton.classList.remove('expandlink_upside-down');
        containerElement.classList.add('content__additional-text_hidden');
      }
})