const container = document.querySelector(".container");

for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.style.height = "15px";
        div.style.width = "15px";
        div.style.backgroundColor = "white";
        div.style.border = "1px solid black";
        grid.appendChild(div);
    }
})