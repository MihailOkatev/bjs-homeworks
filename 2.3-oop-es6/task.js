console.log(`Задача 1`);
class Weapon {
  constructor({name, attack, durability, range}) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.startDurability = this.durability;
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      this.durability = 0;
      return true;
    }
  }

  takeDamage(damage) {
    this.durability = this.durability - damage;
    console.log(
      `Оружие ${this.name} получило повреждение в размере ${damage} единиц`
    );
    if (this.isBroken() === true) {
      console.log(`Оружие ${this.name} сломалось!!`);
    } else {
      console.log(`Прочность оружия ${this.name} = ${this.durability}`);
    }
  }

  getDamage() {
    if (this.durability <= 0) {
      return 0;
    } else if (this.durability >= 0.3 * this.startDurability) {
      let damage = this.attack;
      return damage;
    } else {
      let damage = this.attack / 2;
      return damage;
    }
  }
}
let arm = new Weapon({name:"Рука", attack: 1, durability: Infinity, range:1})
let bow = new Weapon({name:"Лук",attack:10, durability:200, range:3});
let sword = new Weapon({name:"Старый меч",attack:25, durability:500, range:1});
let knife = new Weapon({name:"Нож",attack: 25, durability: 300, range:1})
let staff = new Weapon({name:"Посох",attack: 8, durability: 300, range:2})
console.log(`Прочность лука = ${bow.durability}`);
bow.takeDamage(bow.getDamage());

console.log("Демонстрация фатального повреждения оружия");
bow.takeDamage(500000);

console.log(`Задача 2`);
class Arm extends Weapon {
  constructor() {
    super({name:"Рука",attack:1,durability:Infinity,range:1})
    this.startDurability = this.durability;
  }
}
class Bow extends Weapon {
  constructor() {
    super({name:"Лук",attack:10,durability:200,range:3});
    this.startDurability = this.durability;
  }
}

class Sword extends Weapon {
  constructor() {
    super({name:"Меч",attack:25,durability: 500,range: 1});
    this.startDurability = this.durability;
   
  }
}

class Knife extends Weapon {
  constructor() {
    super({name:"Нож",attack:5,durability: 300,range: 1});
    this.startDurability = this.durability;

  }
}
class Staff extends Weapon {
  constructor() {
    super({name:"Посох",attack:8,durability: 300,range: 2});
    this.startDurability = this.durability;
  }
}

class LongBow extends Bow {
  constructor() {
    super(name, 200);
    this.attack = 15;
    this.range = 4;
    
    this.startDurability = this.durability;
    this.name = "Длинный лук";
    
    
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = "Секира";
    this.attack = 27;
    this.durability = 800;
    this.startDurability = this.durability;
  }
}
class StormStaff extends Staff {
  constructor() {
    super();
    this.name = "Посох Бури";
    this.attack = 10;
    this.range = 3
  }
}

let ironArm = new Arm();
let longbow = new LongBow();
let axe = new Axe();
let stormStaff = new StormStaff();

console.log(axe.name);
console.log(axe.durability);
console.log(axe.attack);
console.log(axe.range);
longbow.takeDamage(longbow.getDamage());

console.log(`Задача 3`);

class StudentLog {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  getName() {
    return this.name;
  }
  addGrade(grade, subject) {
    if (grade > 5 || grade < 1) {
      console.log(
        "Вы пытаетесь добавить оценку, выходящую за нормальный диапазон от 1 до 5"
      );
    } else {
      if (this.marks[subject] === undefined) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(grade);
    }
  }
  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined) {
      console.log(
        "Вы пытаетесь вычислить среднюю оценку по предмету, который отсутствует в журнале"
      );
    } else if (this.marks[subject] === []) {
      return 0;
    } else {
      let gradesSum = 0;
      for (let i = 0; i < this.marks[subject].length; i++) {
        gradesSum = gradesSum + this.marks[subject][i];
      }
      let averageBySubject = gradesSum / this.marks[subject].length;
      return averageBySubject;
    }
  }
  getTotalAverage() {
    let totalAverage;
    if (this.marks === undefined) {
      return 0;
    } else {
      let gradesSum = 0;

      for (let prop in this.marks) {
        gradesSum = gradesSum + this.getAverageBySubject(prop);
      }
      totalAverage = gradesSum / Object.keys(this.marks).length;
    }
    return totalAverage;
  }
}

let nikiforov = new StudentLog("Олег Никифоров");

console.log(nikiforov.getName());
nikiforov.addGrade(2, "geometry");
nikiforov.addGrade(3, "geometry");
nikiforov.addGrade(5, "algebra");
console.log(nikiforov.getAverageBySubject("geometry"));
console.log(nikiforov.getTotalAverage());
nikiforov.getAverageBySubject("russian_lang");
