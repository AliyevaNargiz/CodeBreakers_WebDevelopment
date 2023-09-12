function increasefont(){
    var text = document.getElementById("JavascriptImplement")
    var size =  window.getComputedStyle(text, null).getPropertyValue('font-size');
    var fontsize = parseInt(size) + 2;
    text.style.fontSize = fontsize + 'px';
}

function decreasefont(){
    var text = document.getElementById("JavascriptImplement")
    var size =  window.getComputedStyle(text, null).getPropertyValue('font-size');
    let fontsize = parseInt(size) - 2;
    text.style.fontSize = fontsize + 'px';
}

var audio = document.getElementById("myAudio");

        function playAudio() {
            audio.play();
        }

        function pauseAudio() {
            audio.pause();
        }


var audio = document.getElementById('myAudio');
var musicButton = document.getElementById('music-button');
        
        musicButton.addEventListener('click', function() {
          if (audio.paused) {
            audio.play();
            musicButton.innerHTML = 'Music: On';
          } else {
            audio.pause();
            musicButton.innerHTML = 'Music: Off';
          }
        });
        

