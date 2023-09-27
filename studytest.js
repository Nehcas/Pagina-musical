const playlist = document.getElementById("playlist");
const audioPlayer = document.getElementById("audio");
const searchInput = document.getElementById("search");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const stopButton = document.getElementById("stop-button");
const audioTitle = document.getElementById("audio-title");
const audioProgressBar = document.getElementById("audio-progress-bar");
const audioCurrentTime = document.getElementById("audio-current-time");
const audioDuration = document.getElementById("audio-duration");
const audioVolumeIcon = document.getElementById("audio-volume-icon");
const audioVolumeSlider = document.getElementById("audio-volume-slider");
const audioVolumeSliderBar = document.getElementById("audio-volume-slider-bar");

// Función para agregar una canción a la lista de reproducción
function addSongToPlaylist(songName, songSrc) {
    const listItem = document.createElement("li");
    listItem.textContent = songName;
    listItem.setAttribute("data-src", songSrc);
    playlist.appendChild(listItem);
}

// Cargar canciones desde tu colección de archivos MP3
const songs = [
    { name: "HOLA", src: "./media/onlymp3.to - Spektrem Shine NCS Release -n4tK7LYFxI0-192k-1695347898.mp3" },
    { name: "Canción 2", src: "cancion2.mp3" },
    // Agrega más canciones aquí
];

songs.forEach(song => {
    addSongToPlaylist(song.name, song.src);
});

// Función para buscar canciones y actualizar el reproductor de audio
function playSong(songSrc) {
    audioPlayer.src = songSrc;
    audioPlayer.play();
}

searchInput.addEventListener("input", () => {
    const searchQuery = searchInput.value.toLowerCase();
    const songsInPlaylist = playlist.querySelectorAll("li");

    songsInPlaylist.forEach(song => {
        const songName = song.textContent.toLowerCase();
        const songSrc = song.getAttribute("data-src");
        if (songName.includes(searchQuery)) {
            song.style.display = "block";
            song.addEventListener("click", () => {
                playSong(songSrc);
                audioTitle.textContent = songName;
            });
        } else {
            song.style.display = "none";
        }
    });
});

// Funciones para controlar la reproducción de audio
playButton.addEventListener("click", () => {
    audioPlayer.play();
});

pauseButton.addEventListener("click", () => {
    audioPlayer.pause();
});

stopButton.addEventListener("click", () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

// Actualizar la barra de progreso y el tiempo transcurrido
audioPlayer.addEventListener("timeupdate", () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressPercentage = (currentTime / duration) * 100;

    audioProgressBar.style.width = `${progressPercentage}%`;
    audioCurrentTime.textContent = formatTime(currentTime);
    audioDuration.textContent = formatTime(duration);
});

// Función para formatear el tiempo en minutos:segundos
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Control de volumen
audioVolumeIcon.addEventListener("click", () => {
    audioPlayer.muted = !audioPlayer.muted;
    updateVolumeIcon();
});

audioVolumeSlider.addEventListener("input", () => {
    const volumePercentage = audioVolumeSlider.value;
    audioPlayer.volume = volumePercentage / 100;
    updateVolumeIcon();
});

function updateVolumeIcon() {
    if (audioPlayer.muted || audioPlayer.volume === 0) {
        audioVolumeIcon.src = "mute-icon.png";
    } else {
        audioVolumeIcon.src = "volume-icon.png";
    }
}
a 