function save(filename, data) {
    const anchor = document.createElement("a");
    anchor.href = data;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function play(audiofail) {
    const audio = new Audio(audiofail);
    audio.play();
}