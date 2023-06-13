let container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let j = 0; j < 16; j++) {
        let grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        row.appendChild(grid);
    }
    container.appendChild(row);
}

let grids = document.querySelectorAll('.grid');
grids.forEach(grid => grid.addEventListener('mouseover', () => {
    grid.classList.add('colored');
}))