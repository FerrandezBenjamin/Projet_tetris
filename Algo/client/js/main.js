const BLOCS = {
  1: {
    // BLOC L
    id: 1,
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
    id: 12,
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
    id: 3,
    cells: [[[true, true, true, true]], [[true], [true], [true], [true]]],
    color: "orange",
  },

  4: {
    //BLOC Z
    id: 4,
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
