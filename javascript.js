let x = 960;
const container = document.querySelector(".container");
container.style.height = `${x}px`;
container.style.width = `${x}px`;

createGrid(16);

const button = document.createElement('button');
button.textContent = "New Grid";
button.classList.add("btn");
document.body.insertBefore(button, container);
button.addEventListener('click', () => {
    let newGrid = parseInt(prompt('Choose the number of squares per side for the new grid.'))

    while ( newGrid <= 0 ||
        newGrid > 100 ||
        isNaN(newGrid) === true) {
            newGrid = prompt('You should choose a NUMBER between 1 & 100');
        }
    
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(newGrid);
    
});

function createGrid(n) {
    for (let j = 0; j < n; j++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
    }

    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
    for (let i = 0; i < n; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.height = `${x / n}px`;
        div.style.width = `${x / n}px`;
        div.style.backgroundColor = "white";
        div.style.border = "1px solid black";
        div.style.boxSizing = "border-box";
        grid.appendChild(div);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    })
})
})
}