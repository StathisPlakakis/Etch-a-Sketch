let x = 700;
const container = document.querySelector(".container");
container.style.backgroundColor = 'red';
container.style.height = `${x}px`;
container.style.width = `${x}px`;

for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
}

const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.height = `${x / 16}px`;
        div.style.width = `${x / 16}px`;
        div.style.backgroundColor = "white";
        div.style.border = "1px solid black";
        grid.appendChild(div);
    }
})
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    })
})

const button = document.createElement('button');
button.textContent = "New Grid";
button.classList.add("btn");
document.body.insertBefore(button, container);