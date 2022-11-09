class Personnage {
  constructor(pseudo, classe, sante, attaque, niveau) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }

  evoluer(pseudo, niveau) {
    //faire augmenter le niveau du personnage de + 1
    console.log(
      `Le personnage ${this.pseudo} évolue au niveau ${this.niveau + 1}`
    );
  }

  verifierSante(pseudo, sante) {
    //verifier que la sante du personnage est < ou = à 0 > si oui santé = 0 pour ne pas avoir de points de vie negatifs
    if (this.sante <= 0) {
      this.sante == 0;
      console.log(`Le joueur ${this.pseudo} à perdu ...`);
    }
  }
  get information() {
    return `Le ${this.classe} ${this.pseudo} à ${this.sante} points de vie, et est au niveau ${this.niveau}`;
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      `${this.pseudo} attaque avec son coups spécial "puissance des arkanes " ${
        this.personnage.pseudo
      } ${this.attaque * 5} degats`
    );
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90, 0);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        "attaque" +
        personnage.pseudo +
        " en lançant un sort (" +
        this.attaque +
        " degats)"
    );

    this.evoluer();
    personnage.verifierSante();

    //prendre en param le personnage adverse
    // reduire sa sante
    // affiche "pseudo" attaque "perso.pseudo" en lançant un sort "att.degat" > FAIT
    //appeler la fonction evoluer() puis appeler la fonction verifierSante()
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec son coup spécial puissance des arcanes " +
        personnage.pseudo +
        " (" +
        this.attaque * 5 +
        " dégâts)"
    );
    personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "guerrier", 350, 50, 0);
  }

  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " avec son épée (" +
        this.attaque +
        " dégâts)"
    );

    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec son coup spécial haches de guerre " +
        personnage.pseudo +
        " (" +
        this.attaque * 5 +
        " dégâts)"
    );
    personnage.verifierSante();
  }
}

let personnage1 = new Magicien("Arteus");
let personnage2 = new Guerrier("Bakamon");

// script de jeu

console.log(personnage1.information);
console.log(personnage2.information);
personnage2.attaquer(personnage1);
console.log(personnage1.information);
personnage1.attaquer(personnage2);
console.log(personnage2.information);
personnage2.coupSpecial(personnage1);
