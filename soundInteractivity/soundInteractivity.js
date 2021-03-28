function play(){
       var audio = document.getElementById("audio");
       if (audio.paused == false){
      audio.pause();
      document.body.style.backgroundColor = "white";
} else {
      audio.play();
      document.body.style.backgroundColor = "black";
}
                 }
