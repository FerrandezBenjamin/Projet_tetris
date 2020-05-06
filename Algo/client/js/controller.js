function initializeController(grid) {
  window.onkeydown = (event) => {
    // console.log(event.code); //// A décommenter si on veut afficher les valeurs claviers dans la console
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
      case "NumpadSubtract": // Passez en mode cheat
        if (PLAY == true) {
          imTheBest(grid);
          break;
        }
      // case "Space": // Mettre pause
      //   inPause(grid);
      //   break;
    }
  };
}
