// JAVASCRIPT

//                    *See citations in indexNew.html*

// This script serves the dropdown menu. The function is triggered when the
// mouse clicks on the menu button, showing the full menu.

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// When the menu is down, a function is applied to reach the content of the
// button selected. The number of pages affects the dropdown length as seen with
// var and the use of i < dropdowns.length; i++. 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
