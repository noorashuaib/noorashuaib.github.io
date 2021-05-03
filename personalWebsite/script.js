// Adding the sound when hovering over the image
// Also resetting the sound to the start when not hovering
var soundAudio = $("#audioSound")[0];
$("#audioImage").mouseenter(function() {
  soundAudio.play();
});
$("#audioImage").mouseleave(function() {
  soundAudio.pause();
  soundAudio.currentTime = 0;
});

var filmAudio = $("#filmSound")[0];
$("#filmfestImage").mouseenter(function() {
  filmAudio.play();
});
$("#filmfestImage").mouseleave(function() {
  filmAudio.pause();
  filmAudio.currentTime = 0;
});

var videoAudio = $("#videoSound")[0];
$("#videoImage").mouseenter(function() {
  videoAudio.play();
});
$("#videoImage").mouseleave(function() {
  videoAudio.pause();
  videoAudio.currentTime = 0;
});

var comicAudio = $("#comicSound")[0];
$("#comicImage").mouseenter(function() {
  comicAudio.play();
});
$("#comicImage").mouseleave(function() {
  comicAudio.pause();
  comicAudio.currentTime = 0;
});

// see references, adding the speech bubble script
$('#typewriteTextt').typewrite({
  // looping the script
     continuous: true,
     // turned off the blinking cursor to avoid the speech bubble resizing
     // whenever the cursor blinked
     blinkingCursor: false,
        actions: [
            {type: 'Welcome to my website! '},
            {delay: 5000},
            {remove: {num: 23, type: 'stepped'}},
            {type: 'My name is Noora and here are a few of my projects :) '},
            {delay: 4000},
            {remove: {num: 54, type: 'stepped'}},
            {type: 'Some projects are more direct '},
            {delay: 3000},
            {remove: {num: 30, type: 'stepped'}},
            {type: 'Others are a bit abstract '},
            {delay: 3000},
            {remove: {num: 26, type: 'stepped'}},
            {type: 'All are projects that I am proud to present! '},
            {delay: 3000},
            {remove: {num: 45, type: 'stepped'}},
            {type: 'With a great class '},
            {delay: 3000},
            {remove: {num: 19, type: 'stepped'}},
            {type: 'Great Professor '},
            {delay: 3000},
            {remove: {num: 16, type: 'stepped'}},
            {type: 'And no '},
            {delay: 1000},
            {remove: {num: 3, type: 'stepped'}},
            {type: 'some stress '},
            {delay: 3000},
            {remove: {num: 16, type: 'stepped'}},
            {type: 'This is a portfolio of my work for Comm Lab Spring 2021! '},
            {delay: 3000},
            {select: {from: 0, to: 57}},
            {delay: 500},
            // removed the last sentence by selecting and deleting
            // because it was long
            {remove: {num: 57, type: 'whole'}},
        ]
    })
