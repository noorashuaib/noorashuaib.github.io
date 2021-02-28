var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radioButtons');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}

changeSide();

radioGroup.addEventListener('change', changeSide);

function happyTime() {
  if (currentClass != showClass) {
  setTimeout(myFunction, 3000);
  showClass = 'show-front';
  }
}

  happyTime();
