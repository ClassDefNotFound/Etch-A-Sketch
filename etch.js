
function createGrid(gridSize) {
    const container = document.querySelector('#container');

    // Check if there are any existing grids and delete it
    const existingGrid = document.querySelectorAll('.row');
    existingGrid.forEach(elem => elem.remove());

    for (let x = 0; x < gridSize; x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let y = 0; y < gridSize; y++) {
            const col = document.createElement('div');
            col.classList.add('grid');
            col.addEventListener('mouseenter', onGridMouseEnter);
            col.addEventListener('mouseleave', onGridMouseLeave);
            row.appendChild(col);

        }
        container.appendChild(row);
    }

    setBtnText(gridSize);

};

function onGridMouseEnter(e) {
    // Randomly generate 3 RGB values 
    const rngColors = [];
    for (let i = 0; i < 3; i++) {
        rngColors.push(Math.ceil(Math.random()*255));
    }
    e.target.style.backgroundColor = `rgb(${rngColors.join(',')})`;
}

function onGridMouseLeave(e) {
    e.target.style.backgroundColor = null;
}

function setBtnText(size) {
    const btn = document.querySelector('#grid-size-btn');
    btn.textContent = `${size}x${size}`;
}

function promptGridSize() {
    let gridSize;
    while (!gridSize || gridSize > 100) {
        gridSize = +(prompt('Enter a grid size: (Must be a number <= 100~)'));
    }

    createGrid(gridSize);
}

createGrid(16);

const gridBtn = document.querySelector('#grid-size-btn');
gridBtn.addEventListener('click', promptGridSize);