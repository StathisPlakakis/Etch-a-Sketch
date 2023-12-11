let x = 960;
const btns = document.querySelector(".btns");
const container = document.querySelector(".container");
container.style.height = `${x}px`;
container.style.width = `${x}px`;

createGrid(16);

const button = document.createElement('button');
button.textContent = "Black & White Grid";
button.classList.add("btn");
btns.appendChild(button);
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

const button2 = document.createElement('button');
button2.textContent = "Colorful Grid";
button2.classList.add("btn2");
btns.appendChild(button2);
button2.addEventListener('click', () => {
    let newGrid2 = parseInt(prompt('Choose the number of squares per side for the new grid.'))

    while ( newGrid2 <= 0 ||
        newGrid2 > 100 ||
        isNaN(newGrid2) === true) {
            newGrid2 = prompt('You should choose a NUMBER between 1 & 100');
        }
    
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(newGrid2, false);
    
});

function createGrid(n, c=true) {
    for (let j = 0; j < n; j++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
        for (let i = 0; i < n; i++) {
            const div2 = document.createElement("div");
            div2.style.height = `${x / n}px`;
            div2.style.width = `${x / n}px`;
            div2.style.backgroundColor = "rgba(255,255,255,0)";
            div2.style.border = "1px solid black";
            div2.style.boxSizing = "border-box";
            div2.classList.add("square");
            div.appendChild(div2);

        }
    }

    const squares = document.querySelectorAll('.square');
    if (c === true) {
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                let alpha = parseFloat(square.style.backgroundColor.split(",")[3]);
                alpha += 0.1;
                square.style.backgroundColor = `rgba(0,0,0,${alpha})`;
                
            })
            square.addEventListener('click', () => {
                square.style.backgroundColor = `rgba(0,0,0,1)`;
                
            })
    })
    }else if (c === false) {
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                const r = Math.floor(Math.random() * (255 - 0 + 1));
                const g = Math.floor(Math.random() * (255 - 0 + 1));
                const b = Math.floor(Math.random() * (255 - 0 + 1));
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            })
        })
    }
}
