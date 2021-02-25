var cube = document.querySelector('.cube');
var radioButtons = document.querySelector('.radioButtons');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioButtons.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}

changeSide();

radioButtons.addEventListener('change', changeSide);
