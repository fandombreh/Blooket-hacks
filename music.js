// music.js - Audio controller for Blooket bookmarklet
(function() {
    const MUSIC_URL = "https://raw.githubusercontent.com/fandombreh/Blooket-hacks/Kyoto/SpotiDownloader.com%20-%20Bad%20Kid%20-%20Barretta.mp3";
    let audio = null;
    let isPlaying = false;
    
    window.BlooketMusic = {
        toggle: function() {
            if (isPlaying) {
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                }
                isPlaying = false;
                console.log("🎵 Music stopped");
                return false;
            } else {
                audio = new Audio(MUSIC_URL);
                audio.loop = true;
                audio.volume = 0.5;
                audio.play().catch(e => console.log("Music error:", e));
                isPlaying = true;
                console.log("🎵 Music playing: Bad Kid - Barretta");
                return true;
            }
        },
        stop: function() {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
            isPlaying = false;
        },
        setVolume: function(vol) {
            if (audio) audio.volume = Math.min(1, Math.max(0, vol));
        }
    };
})();
