var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radioButtons');
var currentClass = '';
var showClass;
var timerCount = 0;

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
  goHappyTime();
}

changeSide();

radioGroup.addEventListener('change', changeSide);

function goBack() {
  timerCount--;
  if (timerCount <= 0) {
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( 'show-front' );
  showClass = 'show-front';
  document.getElementById('front-btn').checked = true;
}
}

function goHappyTime() {
  if (showClass != 'show-front') {
  timerCount++;
  setTimeout(goBack, 5000);
  }
}
