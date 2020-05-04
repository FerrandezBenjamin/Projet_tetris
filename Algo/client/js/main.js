const BLOCS = {
  1: {
    // BLOC L
    cells: [
      [
        [true, false, false],
        [true, true, true],
      ],
      [
        [true, true],
        [true, false],
        [true, false],
      ],
      [
        [true, true, true],
        [false, false, true],
      ],
      [
        [false, true],
        [false, true],
        [true, true],
      ],
    ],
    color: "teal",
  },

  2: {
    // BLOC T
    cells: [
      [
        [true, true, true],
        [false, true, false],
      ],
      [
        [true, false],
        [true, true],
        [true, false],
      ],
      [
        [false, true, false],
        [true, true, true],
      ],
      [
        [false, true],
        [true, true],
        [false, true],
      ],
    ],
    color: "purple",
  },

  3: {
    //BLOC I
    cells: [[[true, true, true, true]], [[true], [true], [true], [true]]],
    color: "orange",
  },

  4: {
    //BLOC Z
    cells: [
      [
        [true, true, false],
        [false, true, true],
      ],
      [
        [false, true],
        [true, true],
        [true, false],
      ],
    ],
    color: "green",
  },
};

let grid = {};
initializeModel(grid);
initializeView(grid);
initializeController(grid);
