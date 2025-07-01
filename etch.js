
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
            row.appendChild(col);

        }
        container.appendChild(row);
    }

    setBtnText(gridSize);

};

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