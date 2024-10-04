class gameHero {
  name;
  age;
  typeHero;

  constructor(name, age, typeHero) {
    this.name = name;
    this.age = age;
    this.typeHero = typeHero;
  }

  attack() {
    this.attackHero = this.defineWeapon(this.typeHero);
    console.log(`o ${this.typeHero} atacou usando ${this.attackHero}`);  
  }

  defineWeapon(typeHero) {
    if (typeHero === 'mago') {
      return 'magia';
    }
    else if (typeHero === 'guerreiro') {
      return 'espada';
    }
    else if (typeHero === 'monge') {
      return 'artes marciais';
    }
    else {
      return "shuriken";
    }
  }
}

const prompt = require('prompt-sync')();

const name = prompt('Qual é o nome do seu herói? ');
const age = prompt('Qual é a idade do seu herói? ');
const typeHero = prompt('Qual é o tipo do seu herói? ');

const hero = new gameHero(name, age, typeHero);

hero.attack();