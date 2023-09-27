document.addEventListener("DOMContentLoaded", function () {
    const songList = document.getElementById("song-list");
    const addSongButton = document.getElementById("add-button");

    addSongButton.addEventListener("click", function () {
        const songName = document.getElementById("song-name").value;
        const artist = document.getElementById("artist").value;
        const songFile = document.getElementById("song-file").files[0];

        if (songName && artist && songFile) {
            const listItem = document.createElement("li");
            listItem.textContent = `${songName} - ${artist}`;
            songList.appendChild(listItem);

            // Aquí puedes cargar el archivo de audio a tu servidor o realizar otras acciones necesarias
            // Para este ejemplo, simplemente mostramos el nombre del archivo seleccionado
            console.log("Archivo seleccionado:", songFile.name);

            document.getElementById("song-name").value = "";
            document.getElementById("artist").value = "";
            document.getElementById("song-file").value = "";
        }
    });
});