/* global fetch */

function getFact() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            if (response.status != 200) {
                console.error("Error calling the API service: " + response.statusText);
                return "";
            }
            return response.json();
        }).then((json) => {
            updateFactText(json.value);
        });
}

function updateFactText(value) {
    document.getElementById("chucknorris").innerHTML = value;
}

getFact();