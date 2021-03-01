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

function goBack() {
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( '.cube.show-front' );
}

function goHappyTime() {
  if (showClass != '.cube.show-front') {
  setTimeout(goBack, 1000);
  }
}

setInterval(goHappyTime, 1000)
