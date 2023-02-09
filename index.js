console.log("Hello World!");

function createDivs(widthHeight = 30, size = 16) {
    let container = document.getElementById("container");
    container.style.width = `${size * widthHeight}px`;
    container.style.height = `${size * widthHeight}px`;

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let div = document.createElement("div");
            div.style.width = `${widthHeight}px`

            div.innerText = row + col;

            container.append(div);
        }
    }
}

createDivs();