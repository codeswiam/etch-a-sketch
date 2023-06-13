let container = document.querySelector('.container');
generateGrid(16);

document.querySelector('.change').addEventListener('click' , () => {
    let number;
    do {
        number = prompt("Enter number (1-100) of squares:");
    } while (number > 100 || number < 1);
    container.replaceChildren();
    generateGrid(number);
});

function generateGrid(number) {
    for (let i = 0; i < number; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < number; j++) {
            let grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
    // if we put the following outside this function then coloring the new grid will not work
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', () => {
        grid.classList.add('colored');
    }));
}

