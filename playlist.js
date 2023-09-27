// Obtén referencias a los elementos HTML
const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');

// Agrega un evento 'change' al input de archivo
fileInput.addEventListener('change', function() {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        audioPlayer.src = objectURL;
        audioPlayer.play();
    }
<<<<<<< HEAD
});



=======
});
>>>>>>> b213cdf6602ae803d56078f77da93a49218c8be2
