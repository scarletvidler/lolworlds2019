/* **** Imports **** */
import Parallax from 'parallax-js'

/* **** Classes **** */



/* **** Quick Content **** */

document.addEventListener("DOMContentLoaded", function(){
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    $('body').trigger('click')
    const $audio = document.getElementById('lolaudio');
    $audio.muted = false;
    $audio.play();
    $audio.muted = false;
    
    window.setTimeout(function(){
        $audio.play();
        $audio.muted = false;
        $audio.volume = 0.2;
    },2000)
})

