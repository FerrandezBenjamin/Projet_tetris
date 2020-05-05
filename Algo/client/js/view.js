const SIZE = 40;

function initializeView(grid) {
  let canvas = document.getElementById("game");
  canvas.width = grid.width * SIZE;
  canvas.height = grid.height * SIZE;
  let context = canvas.getContext("2d");
  drawBloc(grid, context);
}

function drawBloc(grid, context) {
  // Notre fonction qui nous permets de creer des blocs,
  context.clearRect(0, 0, grid.width * SIZE, grid.height * SIZE);
  let cells = grid.bloc.cells[grid.orientation];
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j]) {
        context.fillStyle = grid.bloc.color;
        context.fillRect((grid.x + j) * SIZE, (grid.y + i) * SIZE, SIZE, SIZE);
        context.strokeStyle = "red";
        context.strokeRect(
          (grid.x + j) * SIZE,
          (grid.y + i) * SIZE,
          SIZE,
          SIZE
        );
      }
    }
  }
  window.requestAnimationFrame(() => drawBloc(grid, context));
}
// context.strokeStyle = "red";
// context.strokeRect(10, 20, 30, 40);
// context.fillStyle = "black";
// context.fillRect(10, 20, 30, 40);
