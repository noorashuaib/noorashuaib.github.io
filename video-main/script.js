let introVideo = document.getElementById("introvideo");
let flexContainer = document.getElementById("flex-container");
let flexContainer2 = document.getElementById("flex-container2");

// Character page ID
let nooraVideo = document.getElementById("nooravideo");
let yegorVideo = document.getElementById("yegorvideo");
let aliVideo = document.getElementById("alivideo");

// Individual Story Pages
let nooraStory = document.getElementById("noorastory");
let yegorStory = document.getElementById("yegorstory");
let aliStory = document.getElementById("alistory");

// Individual Video file
let nooraStoryVid = document.getElementById("noorastoryvid");
let yegorStoryVid = document.getElementById("yegorstoryvid");
let aliStoryVid = document.getElementById("alistoryvid");


// Individual reflection
let nooraConc = document.getElementById("nooraconc");
let yegorConc = document.getElementById("yegorconc");
let aliConc = document.getElementById("aliconc");
let nooraConcVid = document.getElementById("nooraconcvid");
let yegorConcVid = document.getElementById("yegorconcvid");
let aliConcVid = document.getElementById("aliconcvid");


// Buttons
let homeButton = document.getElementById("home");
let noorabtn = document.getElementById("noorabtn");
let yegorbtn = document.getElementById("yegorbtn");
let alibtn = document.getElementById("alibtn"); // Zoom Button
let noorartn = document.getElementById("noorartn");
let yegorrtn = document.getElementById("yegorrtn");
let alirtn = document.getElementById("alirtn"); // Return Button
let nooranext = document.getElementById("nooranext");
let yegornext = document.getElementById("yegornext");
let alinext = document.getElementById("alinext");
let noorareturn = document.getElementById("noorareturn");
let yegorreturn = document.getElementById("yegorreturn");
let alireturn = document.getElementById("alireturn");

// background
let background = document.getElementById("background");
let home = document.getElementById("home");


// Set all other blocks to hide
flexContainer2.style.display = "none";
nooraStory.style.display = "none";
nooraConc.style.display = "none";
yegorStory.style.display = "none";
yegorConc.style.display = "none";
aliStory.style.display = "none";
aliConc.style.display = "none";
noorabtn.style.display = "none";
yegorbtn.style.display = "none";
alibtn.style.display = "none";
noorartn.style.display = "none";
yegorrtn.style.display = "none";
alirtn.style.display = "none";



// Intro Block
introVideo.addEventListener('ended', (event) => {
  console.log("log");
  flexContainer.style.display = "none";
  flexContainer2.style.display = "flex";
  introVideo.currentTime = 0;
  introVideo.load();
})


// Characters Flex Block
nooraVideo.addEventListener('mouseover', (event) => {
  console.log("noora");
  nooraVideo.play();
})

nooraVideo.addEventListener('mouseout', (event) => {
  console.log("nooraout");
  nooraVideo.pause();
})

yegorVideo.addEventListener('mouseover', (event) => {
  console.log("yegor");
  yegorVideo.play();
})

yegorVideo.addEventListener('mouseout', (event) => {
  console.log("yegorout");
  yegorVideo.pause();
})

aliVideo.addEventListener('mouseover', (event) => {
  console.log("Ali");
  aliVideo.play();
})

aliVideo.addEventListener('mouseout', (event) => {
  console.log("Aliout");
  aliVideo.pause();
})




// Character: Noora
home.addEventListener('mouseover', (event) => {
  home.style.color = "#2d8cff";
})
home.addEventListener('mouseout', (event) => {
  home.style.color = "#879190";
})
nooraVideo.addEventListener('click', (event) => {
  console.log("noorapage");
  flexContainer2.style.display = "none";
  nooraStory.style.display = "block";
  nooraVideo.currentTime = 0;
  yegorVideo.currentTime = 0;
  aliVideo.currentTime = 0;
  nooraVideo.load();
  yegorVideo.load();
  aliVideo.load();
  background.style.backgroundImage = "url(img/doodles.png)";
  home.style.color = "#879190 ";
})

nooraStoryVid.addEventListener('ended', (event) => {
  noorabtn.style.display = "flex";
})



nooranext.addEventListener('click', (event) => {
  console.log("noorapageout");
  nooraStory.style.display = "none";
  noorabtn.style.display = "none";
  nooraConc.style.display = "block";
  nooraConcVid.currentTime = 0;
  yegorConcVid.currentTime = 0;
  aliConcVid.currentTime = 0;
  nooraConcVid.load();
  yegorConcVid.load();
  aliConcVid.load();
})

nooraConcVid.addEventListener('ended', (event) => {
  noorartn.style.display = "flex";
})

// Return to Characters after each reflection video



noorareturn.addEventListener('click', (event) => {
  nooraConc.style.display = "none";
  noorartn.style.display = "none";
  flexContainer2.style.display = "flex";
})

// Character: Yegor


yegorVideo.addEventListener('click', (event) => {
  console.log("yegorpage");
  flexContainer2.style.display = "none";
  yegorStory.style.display = "block";
  nooraVideo.currentTime = 0;
  yegorVideo.currentTime = 0;
  aliVideo.currentTime = 0;
  nooraVideo.load();
  yegorVideo.load();
  aliVideo.load();
  background.style.backgroundImage = "url(img/doodles.png)";
  home.style.color = "#879190 ";
  home.addEventListener('mouseover', (event) => {
    home.style.color = "#2d8cff";
  })
  home.addEventListener('mouseout', (event) => {
    home.style.color = "#879190";
  })
})


yegorStoryVid.addEventListener('ended', (event) => {
  yegorbtn.style.display = "flex";
})

yegornext.addEventListener('click', (event) => {
  console.log("yegorpageout");
  yegorStory.style.display = "none";
  yegorbtn.style.display = "none";
  yegorConc.style.display = "block";
  nooraConcVid.currentTime = 0;
  yegorConcVid.currentTime = 0;
  aliConcVid.currentTime = 0;
  nooraConcVid.load();
  yegorConcVid.load();
  aliConcVid.load();
})



yegorConcVid.addEventListener('ended', (event) => {
  yegorrtn.style.display = "block";
})


yegorreturn.addEventListener('click', (event) => {
  yegorConc.style.display = "none";
  yegorrtn.style.display = "none";
  flexContainer2.style.display = "flex";
})

// Character: Ali


aliVideo.addEventListener('click', (event) => {
  console.log("nooraout");
  flexContainer2.style.display = "none";
  aliStory.style.display = "block";
  nooraVideo.currentTime = 0;
  yegorVideo.currentTime = 0;
  aliVideo.currentTime = 0;
  nooraVideo.load();
  yegorVideo.load();
  aliVideo.load();
  background.style.backgroundImage = "url(img/doodles.png)";
  home.style.color = "#879190 ";
  home.addEventListener('mouseover', (event) => {
    home.style.color = "#2d8cff";
  })
  home.addEventListener('mouseout', (event) => {
    home.style.color = "#879190";
  })
})


aliStoryVid.addEventListener('ended', (event) => {
  alibtn.style.display = "flex";
})

alinext.addEventListener('click', (event) => {
  console.log("nooraout");
  aliStory.style.display = "none";
  alibtn.style.display = "none";
  aliConc.style.display = "block";
  nooraConcVid.currentTime = 0;
  yegorConcVid.currentTime = 0;
  aliConcVid.currentTime = 0;
  nooraConcVid.load();
  yegorConcVid.load();
  aliConcVid.load();
})


aliConcVid.addEventListener('ended', (event) => {
  alirtn.style.display = "flex";
})



alireturn.addEventListener('click', (event) => {
  aliConc.style.display = "none";
  alirtn.style.display = "none";
  flexContainer2.style.display = "flex";
})





// Home Button

homeButton.addEventListener('click', (event) => {
  if(flexContainer.style.display = "none") {
    flexContainer2.style.display = "none";
    nooraStory.style.display = "none";
    nooraConc.style.display = "none";
    yegorStory.style.display = "none";
    yegorConc.style.display = "none";
    aliStory.style.display = "none";
    aliConc.style.display = "none";
    flexContainer.style.display = "flex";
    nooraVideo.currentTime = 0;
    yegorVideo.currentTime = 0;
    aliVideo.currentTime = 0;
    nooraVideo.load();
    yegorVideo.load();
    aliVideo.load();
  }
})


function playAudio(url) {
  new Audio(url).play();
}
