var myName: string = "Ramita Leewanich";
//console.log(myName);
//console.log(typeof myName);

var money: number = 100;
//console.log(money);
//console.log(typeof money);

//console.log(null === undefined);
//console.log(null == undefined);
//console.log(null === null);

// NULL: ตัวแปร/Object นั้นๆไม่มีข้อมูลอยู่ข้างใน
// UNDEFINED: ยังไม่ได้ประกาศ/สร้างขึ้นมา

// var: Global variable
// let: ใช้ได้แค่ใน block
// const: ค่าคงที่ ไม่ถูกเปลี่ยนแปลงระหว่างทำงานอยู่

const app_name = "My App";
const app_version = "1.0.0";

// ARRAY
const myArray: number[] = [1, 2, 3];
const myArray2: any[] = [1, 2, 3, "Hello"];

// TUPLE
let employee: [number, string, boolean] = [1, "Miss Ploy", true]; // เก็บข้อมูลได้หลาย data type ต้องใส่ตามที่ประกาศไว้เป๊ะๆ

//สร้าง Array ของ Tuple
let cutomer: [number, string, boolean][] = [
  [1, "Miss Ploy", true],
  [2, "Mister Kavin", false],
];

// ENUM
//ตัวเลขที่เรากำหนดไว้ตายตัว
enum WorkStatus {
  Task = 1,
  Working,
  Done,
}

function sayHello() {
  if (true) {
    // วิธีประกาศตัวแปร
    let MyName: string = "Ploy";
    var MyAge: number;
    var CanVote = true;
    var i;
    console.log(MyName);
  }
  //console.log(MyName);
}

//sayHello();

//การเข้าถึง Array
console.log(myArray2);
console.log(myArray2[0]);
console.log(myArray2.pop());
console.log(myArray2.pop());
console.log(myArray2.pop());
console.log(myArray2);
console.log(myArray2.push("Ramita"));
console.log(myArray2);

//การเข้าถึง Tuple
console.log(employee);
console.log(employee[0]);
console.log(cutomer);
console.log(cutomer[1]);
cutomer.push([3, "Mister Man", true]);
console.log(cutomer);

//การเข้าถึง Enum
console.log(WorkStatus.Task);
console.log(WorkStatus.Done);
