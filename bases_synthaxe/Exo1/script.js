class NombreMystere {
    constructor() {
      this.nombreMystere = Math.floor(Math.random() * 100) + 1;
      this.nbTentatives = 0;
    }
  
    jouer(numero) {
      this.nbTentatives++;
  
      if (numero > this.nombreMystere) {
        return "TROP GRAND";
      } else if (numero < this.nombreMystere) {
        return "TROP PETIT";
      } else {
        return `BRAVO, TU AS GAGNÉ EN ${this.nbTentatives} ESSAIS`;
      }
    }
  }
  
  const jeu = new NombreMystere();
  
  while (true) {
    const saisie = prompt("Devine le nombre mystère (entre 1 et 100) :");
    const numero = parseInt(saisie);
  
    if (isNaN(numero) || numero < 1 || numero > 100) {
      alert("Veuillez entrer un nombre valide entre 1 et 100.");
    } else {
      const resultat = jeu.jouer(numero);
      alert(resultat);
  
      if (resultat.includes("BRAVO")) {
        break;
      }
    }
  }


