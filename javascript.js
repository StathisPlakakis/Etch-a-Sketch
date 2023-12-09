const container = document.querySelector(".container");
for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.height = "15px";
    div.style.width = "15px";
    div.style.backgroundColor = "grey";
    div.style.border = "1px solid black";
    container.appendChild(div);
    console.log(j)
}