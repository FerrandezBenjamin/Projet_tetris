function initializeModel(grid) {
  grid.cells = [];
  grid.width = 12;
  grid.height = 18;
  grid.bloc = null;
  grid.orientation = -1;
  grid.x = -1;
  grid.y = -1;
  initializeGrid(grid);
  chooseBloc(grid);
  window.setInterval(update, 100, grid);
}
function initializeGrid(grid) {
  for (let i = 0; i < grid.height; i++) {
    grid.cells[i] = [];
    for (let j = 0; j < grid.width; j++) {
      grid.cells[i][j] = 0;
    }
  }
  console.log(grid.cells);
}

function chooseBloc(grid) {
  // Choisi un bloc de manière aléatoire
  grid.bloc = BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1];
  // on veut recupérer l'index du bloc donc BLOCS []
  // la fonction Mathj.random retourne un nombre entre 0 et 1
  // Math.random retourne un nombre entre 0 et 1 alors qu'on veut un bloc dont l'index est compris entre 1 et 4 donc +1
  grid.orientation = Math.floor(Math.random() * grid.bloc.cells.length);
  grid.x = grid.width / 2 - 1;
  grid.y = 0;
}

function update(grid) {
  if (grid.y < grid.height - grid.bloc.cells[grid.orientation].length) {
    grid.y++;
  } else {
    stockBloc(grid);
    chooseBloc(grid);
  }
}

function stockBloc(grid) {
  let cells = grid.bloc.cells[grid.orientation];
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j]) {
        grid.cells[grid.y + i][grid.x + j] = grid.bloc.id;
      }
    }
  }
  // console.log(grid.cells);
}
