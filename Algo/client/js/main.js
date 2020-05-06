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
    id: 2,
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

  5: {
    //BLOC CARREE
    id: 5,
    cells: [
      [
        [true, true],
        [true, true],
      ],
    ],
    color: "black",
  },
  6: {
    // le L à l'envers
    id: 6,
    cells: [
      [
        [false, false, true],
        [true, true, true],
      ],
      [
        [true, true],
        [false, true],
        [false, true],
      ],
      [
        [true, true, true],
        [true, false, false],
      ],
      [
        [true, false],
        [true, false],
        [true, true],
      ],
    ],
    color: "blue",
  },
};

let grid = {};
initializeModel(grid);
initializeView(grid);
initializeController(grid);
