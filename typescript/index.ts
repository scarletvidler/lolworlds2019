/* **** Imports **** */
import Parallax from 'parallax-js'

/* **** Classes **** */

const audioHandler = class{

    public status: string;
    private audio: HTMLElement;

    constructor(){
        this.audio = document.getElementById('lolaudio');
    }

    public changeAudio = (newStatus: string): void =>{

        this.audio.muted = false;
        this.audio.volume = 0.07;

        if(newStatus == 'stop' || newStatus == 'start'){
            this.status = newStatus;
        }else if(newStatus == 'togglePause'){
            if(this.status == 'paused'){
                this.status = 'start';
            }else if(this.status == 'start'){
                this.status = 'paused';
            }
        }

        if(this.status == 'stop'){
            this.stopAudio();
        }else if(this.status == 'start'){
            this.startAudio();
        }else{
            this.pauseAudio();
        }
    }

    private startAudio = (): void =>{
        this.audio.play();
    }

    private pauseAudio = (): void => {
        this.audio.pause();
    }

    private stopAudio = (): void => {
        console.log(this.audio)
        this.audio.pause();
    }
}


/* **** Quick Content **** */

document.addEventListener("DOMContentLoaded", function(){
    const Audio = new audioHandler();
    let scene = document.getElementById('scene');
    let parallax = new Parallax(scene);
    window.player;

    $('body').trigger('click');

    
    window.setTimeout(function(){
        Audio.changeAudio('start');
    },1000);

    $('.volumesvg').click(function(){
        Audio.changeAudio('stop');  
        $(this).toggleClass('off');
    })


    $('.ytbtn').click(function(){
        Audio.changeAudio('togglePause');
        $('.popup').removeClass('hide');
        // Replace the 'ytplayer' element with an <iframe> and
        // YouTube player after the API code downloads.
        // Load the IFrame Player API code asynchronously.
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYouTubePlayerAPIReady = function() {
            window.player = new YT.Player('ytplayer', {
            height: '360',
            width: '640',
            autoplay: 1,
            videoId: 'v-h9lAkbfDE',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
            });
        }

        //  The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            window.player.setPlaybackRate(1);
            event.target.playVideo();
        }

        function onPlayerStateChange(event) {        
            if(event.data === 0) {          
                Audio.changeAudio('start');
                $('.popup').addClass('hide');
                window.player.stopVideo();
            }
        }
    })

    $('.popup').click(function(){
        Audio.changeAudio('start');
        $('.popup').addClass('hide');
        window.player.stopVideo();
    })

})



