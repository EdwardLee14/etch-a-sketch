function gridMaker() {
    let list = document.getElementById("grid");
    for (let i = 0; i < 4; i++) {
        let row = document.createElement("div");
        row.classList.add("gridRows");
        for (let j = 0; j < 4; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        list.appendChild(row);
    }
}

function marker() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(function(cube) {
        cube.addEventListener("mouseover", function() {
            cube.style.backgroundColor = "blue";
        });
        cube.addEventListener("mouseout", function() {
            cube.style.backgroundColor = "blue";
        });
    });
}

marker();
gridMaker();
