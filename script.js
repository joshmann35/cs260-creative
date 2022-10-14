/* global fetch */
function getCustomBG(r, g, b, tiles, size, border, mode) {
    fetch("https://php-noise.com/noise.php?r=" + r + "&g=" + g + "&b=" + b + "&tiles=" + tiles + "&tileSize=" + size + "&borderWidth=" + border + "&mode=" + mode + "&json")
        .then((response) => {
            if (response.status != 200) {
                console.error("Error calling the API service: " + response.statusText);
                return "";
            }
            return response.json();
        }).then((json) => {
            updateBgImgElem(json.uri);
        });
}
const bgImgElem = document.getElementById("custom-bg");

function updateBgImgElem(uri) {
    bgImgElem.src = uri;
}

function onClick(e) {
    e.preventDefault();
    getCustomBG();
}

getCustomBG();

document.getElementById("gen-rand-btn").addEventListener('click', onClick);
