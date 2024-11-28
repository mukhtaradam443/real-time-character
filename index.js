const textareaEle = document.getElementById('textarea');

const totalcounterEl = document.getElementById('total-counter');

const reaminingCounterEle = document.getElementById('remaining-counter');

textareaEle.addEventListener('keypress', () => {
  updateValue();
});

updateValue();

function updateValue() {
  totalcounterEl.innerText = textareaEle.value.length;

  reaminingCounterEle.innerHTML =
    textareaEle.getAttribute('maxLength') - textareaEle.value.length;
}
