class Point {
  x: number;
  y: number;
  readonly version: string = "1.0.1";
  //x: number = 0;
  //y: number = 0;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
    console.log("Hello");
  }
}

const point = new Point(10, 20);
point.x = 100;
//point.y = 20;
console.log(`${point.x} -- ${point.y}`);

class Point2 {
  // OVERLOAD
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {}
}

class Point3 {
  // GETTER SETTER
  _x: number = 0;

  get x(): number {
    this._x = this._x + 1;
    return this._x;
  }
  set x(value: number) {
    this._x = value;
  }
}
const p = new Point3();
console.log(p._x);
console.log(p.x);
console.log(p.x);
console.log(p.x);

// INHERITANCE
class Person {
  name: string;
  constructor(name: string = "") {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

class Employee extends Person {
  salary: number = 0;
  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
  }
  sayHi() {
    super.sayHi();
    console.log(`Salary: ${this.salary}`);
  }
}

const person = new Person("John");
person.sayHi();
const _employee = new Employee("John", 15000);
_employee.sayHi();

// ABSTRACT
//ไม่สามารถเอามาเป็นคลาสได้เลยด้วยตัวมันเอง
abstract class Character {
  public name: string = "";
  public damage: number = 0;
  public attackSpeed: number = 0;

  //เวลาเอาไปใช้กับคลาสอื่นจะบังคับใช้ constructor พวกนี้
  constructor(name: string, damage: number, speed: number) {
    this.name = name;
    this.damage = damage;
    this.attackSpeed = speed;
  }

  public abstract damagePerSecond(): number; //function ที่ต้องมี ลูกที่เอาไปใช้ต้องเขียนไส้ในเอง
}

class Goblin extends Character {
  constructor(name: string, damage: number, speed: number) {
    super(name, damage, speed);
  }

  public damagePerSecond(): number {
    return this.damage * this.attackSpeed;
  }
}
