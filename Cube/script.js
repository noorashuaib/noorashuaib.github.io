// creating variables
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radioButtons');
// classes for the faces of the cube
var currentClass = '';
var showClass;
// timerCount is in order to determine how many times the radio buttons were clicked to ensure that
// the post-5 second return to the happy face happens only after the last face selected
var timerCount = 0;

// to change the side of the cube based on the radio button selected
function changeSide() {
  // depending on which button checked, the show- class (such as show-front) is set
  var checkedRadio = radioGroup.querySelector(':checked');
  showClass = 'show-' + checkedRadio.value;
  // removes the current face and replaces it with the selected face
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
  // goHappyTime sets the timer for the cube to go back to the happy face.
  goHappyTime();
}

// runs the function when a new radio button is selected
changeSide();
radioGroup.addEventListener('change', changeSide);

// This function changes the face of the cube when the timer runs out. The function
// also selects the radio button for the front face once the cube returns to the front face.
// The timerCount is used to ensure that the post-5 second return to the happy face only occurs
// after the last panel is selected, so as not to interrupt the user going through the comic.
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

// This function checks if the face being displayed is not the front face, so as
// to trigger the function that returns to the front face. The timerCount and
// setTimeout is used to return to the front face 7 seconds after the last panel
// was selected.
function goHappyTime() {
  if (showClass != 'show-front') {
  timerCount++;
  setTimeout(goBack, 7000);
  }
}
