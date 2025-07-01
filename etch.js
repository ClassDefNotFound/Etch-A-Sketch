
function createGrid() {
    const container = document.querySelector('#container');

    const gridSize = 16;
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

};

function setBtnText(size) {
    const btn = document.querySelector('#grid-size-btn');
    btn.textContent = `${size}x${size}`;
}

function promptGridSize() {
    
}

createGrid();
setBtnText(16);