const SIZE = 40;

function initializeView(grid) {
  let canvas = document.getElementById("game");
  canvas.width = grid.width * SIZE;
  canvas.height = grid.height * SIZE;
  let context = canvas.getContext("2d");
  draw(grid, context);
}

function draw(grid, context) {
  context.clearRect(0, 0, grid.width * SIZE, grid.height * SIZE);
  drawGrid(grid, context);
  drawBloc(grid, context);
  setTimeout(() => draw(grid, context), 60);
}

function drawCell(context, x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
  context.strokeStyle = "red";
  context.strokeRect(x * SIZE, y * SIZE, SIZE, SIZE);
}

function drawBloc(grid, context) {
  // Notre fonction qui nous permets de creer des blocs,
  let cells = grid.bloc.cells[grid.orientation];
  for (let i = 0; i < cells.length; i++) {
    // On parcourt les lignes de chaque objet
    for (let j = 0; j < cells[i].length; j++) {
      // On parcourt les colonnes de chaque lignes
      if (cells[i][j]) {
        drawCell(context, grid.x + j, grid.y + i, grid.bloc.color);
      }
    }
  }
}

function drawGrid(grid, context) {
  for (let i = 0; i < grid.cells.length; i++) {
    for (let j = 0; j < grid.cells[i].length; j++) {
      let cell = grid.cells[i][j];
      if (cell > 0) {
        drawCell(context, j, i, BLOCS[cell].color);
      }
    }
  }
}
