export class Character {
    constructor(name, type) {
        if (typeof name !== "string" || name.length < 2 || name.length > 10) {
            throw new Error("Название должно состоять из больше 2 и меньше 10 символов");
        }

        const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        if (!validTypes.includes(type)) {
            throw new Error("Такого типа не существует");
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

    }

    levelUp() {
        if (this.level === 0) {
            throw new Error("Нельзя повысить левел умершего");
        }

        this.level += 1;
        this.attack = Math.round(this.attack * 1.2);
        this.defence = Math.round(this.defence * 1.2);
        this.health = 100;
    }

    damage(points) {
        if (this.health < 0) {
            throw new Error("Нельзя рассчитать урон с нулевым здоровьем");
        }

        const damageTaken = points * (1 - this.defence / 100);
        this.health -= damageTaken;

    }
}

class Bowman extends Character {
    constructor(name) {
      super(name, "Bowman");
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Swordsman extends Character {
    constructor(name) {
      super(name, "Swordsman");
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  class Magician extends Character {
    constructor(name) {
      super(name, "Magician");
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Undead extends Character {
    constructor(name) {
      super(name, "Undead");
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Zombie extends Character {
    constructor(name) {
      super(name, "Zombie");
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  class Daemon extends Character {
    constructor(name) {
      super(name, "Daemon");
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  export { Bowman, Swordsman, Magician, Undead, Zombie, Daemon };