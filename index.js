"use strict";

const DEFAULT_SIZE = 20;

let size = prompt("Enter number of squares per side: ", DEFAULT_SIZE);

createPixels(undefined, size);

const button = document.getElementById("button");

button.addEventListener("click", () => {
    size = prompt("Enter number of squares per side: ", DEFAULT_SIZE);

    removePixels();

    createPixels(undefined, size);
})


function createPixels(boxDimension = 20, size = DEFAULT_SIZE) {
    let rootDiv = document.getElementById("root-div");
    rootDiv.style.width = `${size * boxDimension}px`;
    rootDiv.style.height = `${size * boxDimension}px`;

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let div = document.createElement("div");
            div.classList.add("white-pixel");
            div.style.width = `${boxDimension}px`

            rootDiv.append(div);
        }
    }

    const pixels = document.querySelectorAll("div.white-pixel");

    pixels.forEach((div) => {
        div.addEventListener("mouseover", function () {
            div.classList.add("black-pixel");
        });
    });
}

function removePixels() {
    let rootDiv = document.getElementById("root-div");

    rootDiv.innerHTML = "";
}