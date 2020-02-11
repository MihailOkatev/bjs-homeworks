console.log(`Задача 1`);
class Weapon {
  constructor(name, attack, durability, range) {
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
let arm = new Weapon("Рука", 1, Infinity, 1);
let bow = new Weapon("Лук", 10, 200, 3);
let sword = new Weapon("Меч", 25, 500, 1);
let knife = new Weapon("Нож", 5, 300, 1);
let stick = new Weapon("Посох", 8, 300, 2);
let longbow = new Weapon("Длинный лук", 15, 200, 4);
let axe = new Weapon("Секира", 27, 800, 1);
let stickOfStorm = new Weapon("Посох бури");

console.log(`Прочность лука = ${bow.durability}`);
bow.takeDamage(bow.getDamage());

console.log("Демонстрация фатального повреждения оружия");
axe.takeDamage(500000);

console.log(`Задача 2`);
class Arm extends Weapon {
  constructor(name, startDurability, attack, durability, range) {
    super(name, startDurability);
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
  }
}
class Bow extends Weapon {
  constructor(name, startDurability, attack, durability, range) {
    super(name, startDurability);
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
  }
}

class Sword extends Weapon {
  constructor(name, startDurability, attack, durability, range) {
    super(name, startDurability);
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
  }
}

class Knife extends Weapon {
  constructor(name, startDurability, attack, durability, range) {
    super(name, startDurability);
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
  }
}
class Stick extends Weapon {
  constructor(name, startDurability, attack, durability, range) {
    super(name, startDurability);
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
  }
}

class LongBow extends Bow {
  constructor(name, startDurability, attack, durability, range) {
    super(attack, durability, range, startDurability);
    this.name = name;
  }
}

class Axe extends Sword {
  constructor(name, attack, durability, range, startDurability) {
    super(attack, durability, range, startDurability);
    this.name = name;
  }
}
class StickOfStorm extends Stick {
  constructor(name, attack, durability, range, startDurability) {
    super(attack, durability, range, startDurability);
    this.name = name;
  }
}

let ironArm = new Arm("Железный кулак");

console.log(ironArm.name);
console.log(ironArm.durability);
console.log(ironArm.attack);
console.log(ironArm.range);
ironArm.takeDamage(ironArm.getDamage());

console.log(`Задача 3`);
let averageMarksArr = [];

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
