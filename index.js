"use strict";

createDivs(undefined, undefined);

const divs = document.querySelectorAll("div.box-white");

divs.forEach((div) => {
    div.addEventListener("mouseover", function () {
        div.classList.add("box-black");
    });
});

function createDivs(boxDimension = 30, size = 16) {
    let container = document.getElementById("boxes");
    container.style.width = `${size * boxDimension}px`;
    container.style.height = `${size * boxDimension}px`;

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let div = document.createElement("div");
            div.classList.add("box-white");
            div.style.width = `${boxDimension}px`

            container.append(div);
        }
    }
}

// const loadTilesButton = document.querySelector("button");

// loadTilesButton.addEventListener("click", () => {
//     createDivs(undefined, 20)
// });

// const size = document.getElementById("inputSize");

// console.log(size.value)


// function resetDivs(divs) {
//     divs.forEach((div) => {
//         div.addEventListener("mouseleave", function () {
//             div.classList.remove("box-black");
//         });
//     });
// }
