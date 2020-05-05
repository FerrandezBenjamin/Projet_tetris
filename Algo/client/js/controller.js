function initializeController(grid) {
  window.onkeydown = (event) => {
    switch (event.code) {
      case "ArrowUp": // Changement d'orientation
        incOrientation(grid);
        break;
      case "ArrowDown": // Descendre pour rapidement mon bloc
        update(grid);
        break;
      case "ArrowLeft": // Allez à gauche
        decX(grid);
        break;
      case "ArrowRight": // Allez à droite
        incX(grid);
        break;
    }
  };
}
