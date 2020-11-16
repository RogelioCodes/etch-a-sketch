/*This program is an etch a sketch that was made in order for me to practice more DOM manipulation in conjunction with styling. 
This program also helped me practice event listeners and recursive functions.
This program generates a grid of cells that gives the illusion of an etch a sketch. 
The user can hover over these cells to color them, and this in effect creates pixel art.
*/
// reset grid cell background to white.
const reset = function () {
  removeElementsByClass("cell");
  var gridSize = prompt(
    "How many squares per side would you like? For example, 12 will generate a 12x12 format. \nMIN SIZE: 1\nMAX SIZE: 100"
  );
  createGrid(gridSize, gridSize);

  let allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => {
    cell.style.background = "white";
  });
};

//clears the grid
const clearGrid = function () {
  let allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => {
    cell.style.background = "white";
  });
};
//handles the coloring of each cell
const colorMe = function () {
  const cb = document.getElementById("accept");
  // console.log("CHECKED: " + cb.checked);
  // console.log("ON OR OFF CB value: " + cb.value);
  if (document.getElementById("colorRed").checked) {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        cell.style.backgroundColor = "red";
      });
    });
  } else if (document.getElementById("colorBlue").checked) {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        cell.style.backgroundColor = "blue";
      });
    });
  } else if (document.getElementById("colorGreen").checked) {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        cell.style.backgroundColor = "green";
      });
    });
  } else {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        cell.style.backgroundColor = "black";
      });
    });
  }
};

// erase grid cell background to white.
const eraseMode = function () {
  const cb = document.getElementById("accept");
  console.log("CHECKED: " + cb.checked);
  console.log("ON OR OFF CB value: " + cb.value);
  if (document.getElementById("accept").checked) {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        cell.style.backgroundColor = "black";
      });
    });
  } else {
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.addEventListener("mouseover", (event) => {
        cell.style.backgroundColor = "white";
      });
    });
  }
};

//Grabs each element(cell) inside of the container and removes each cell one by one
function removeElementsByClass(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

//Generates a grid. A container is generated and filled with cells that will then be stylized to give the illusion of etch a sketch cells.
const container = document.getElementById("container");
function createGrid(rows, cols) {
  gridSize = rows * cols;
  let fragment = new DocumentFragment();
  if (rows <= 100 && cols <= 100) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < rows * cols; c++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = "grid-cell" + c;
      container.appendChild(cell).className = "cell";
      fragment.appendChild(cell);
    }
    container.append(fragment);
  } else {
    var gridSize = prompt(
      "ERROR: Please choose a size between 1 and 100. \nHow many squares per side would you like? For example, 12 will generate a 12x12 format. \nMAX SIZE 100"
    );
    createGrid(gridSize, gridSize);
  }

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      cell.style.backgroundColor = "black";
    });
  });
}

createGrid(16, 16);
