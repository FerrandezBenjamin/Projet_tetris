const BLOC_L = {
  cells: [[true, false, false][(true, true, true)]],
};

const BLOC_L_rot = {
  cells: [
    [true, true],
    [true, false],
    [true, false],
  ],
};

const BLOC_L_rot2 = {
  cells: [
    [true, true, true],
    [false, false, true],
  ],
};

const BLOC_L_rot3 = {
  cells: [
    [false, true],
    [false, true],
    [true, true],
  ],
};

const BLOC_T = {
  cells: [
    [true, true, true],
    [false, true, false],
  ],
};

const BLOC_T_rot = {
  cells: [
    [true, false],
    [true, true],
    [true, false],
  ],
};

const BLOC_T_rot2 = {
  cells: [
    [false, true, false],
    [true, true, true],
  ],
};

const BLOC_T_rot3 = {
  cells: [
    [false, true],
    [true, true],
    [false, true],
  ],
};

const BLOC_I = {
  cells: [[true, true, true, true]],
};

const BLOC_I_rot = {
  cells: [[true], [true], [true], [true]],
};

const BLOC_Z = {
  cells: [
    [true, true, false],
    [false, true, true],
  ],
};

const BLOC_Z_rot = {
  cells: [
    [false, true],
    [true, true],
    [true, false],
  ],
};

const GRID = {
  cells: [],
  width: 12,
  height: 18,
};

var canvas = document.getElementById("game");
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

// context.strokeStyle = "red";
// context.strokeRect(10, 20, 30, 40);
// context.fillStyle = "black";
// context.fillRect(10, 20, 30, 40);

function drawPiece(bloc) {
  for (let i = 0; i < bloc.cells.length; i++) {
    for (let j = 0; j < bloc.cells[i].length; j++) {
      if (bloc.cells[i][j]) {
        context.fillStyle = "black";
        context.fillRect(j * 40, i * 40, 40, 40);
        context.strokeStyle = "red";
        context.strokeRect(j * 40, i * 40, 40, 40);
      }
    }
  }
}

drawPiece(BLOC_Z);
