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
  window.setInterval(update, 250, grid);
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

function incOrientation(grid) {
  grid.orientation = (grid.orientation + 1) % grid.bloc.cells.length;
}

function decX(grid) {
  // Pour pas que notre bloc dépasse sur la gauche
  if (grid.x > 0 && blocCanGoThere(grid, grid.x - 1, grid.y)) {
    grid.x--;
  }
}

function incX(grid) {
  // Pour pas que notre bloc dépasse sur la droite
  if (
    grid.x < grid.width - grid.bloc.cells[grid.orientation][0].length &&
    blocCanGoThere(grid, grid.x + 1, grid.y)
  ) {
    grid.x++;
  }
}

function update(grid) {
  // Quand le bloc arrive en bas de la page, stock le bloc, et en créer un autre
  if (
    grid.y < grid.height - grid.bloc.cells[grid.orientation].length &&
    blocCanGoThere(grid, grid.x, grid.y + 1)
  ) {
    grid.y++;
  } else {
    stockBloc(grid); // Stock dans la grille
    checkFullLine(grid);
    chooseBloc(grid); // Creer un autre bloc
  }
}

function blocCanGoThere(grid, x, y) {
  let cells = grid.bloc.cells[grid.orientation];
  let res = true;
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j]) {
        if (grid.cells[y + i][x + j] > 0) {
          res = false;
        }
      }
    }
  }
  return res;
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

function checkFullLine(grid) {
  //Fonction qui permet de verifier si une ligne est pleine
  for (let i = 0; i < grid.cells.length; i++) {
    let res = true;
    for (let j = 0; j < grid.cells[i].length; j++) {
      if (grid.cells[i][j] === 0) {
        res = false;
      }
    }
    if (res) {
      deleteLine(grid, i);
    }
  }
}

function deleteLine(grid, y) {
  // Fonction qui permet de supprimer une ligne
  // CHOIX N1
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < grid.cells[y].length; j++) {
      grid.cells[y - i][j] = grid.cells[y - i - 1][j];
    }
  } // A FAIRE OBLIGATOIRE A LA FIN

  /* CHOIX N2
for (let i = y; i > 0; i--){
  for (let j = 0; j < grid.cells[i].length; j++){
    grid.cells[i][j] = grid.cells[i - 1][j];
  }
}
**/
  for (let j = 0; j < grid.cells[y].length; j++) {
    grid.cells[0][j] = 0;
  }
}
