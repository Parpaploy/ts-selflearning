// VOID
function sayHello() {
  console.log("Hello World");
}

sayHello();
// RETURN
//number
function myNumber(): number {
  return 1;
}

console.log(myNumber());

//string
function sayMyName(name: any, lastname: string = "None"): string {
  return "Ploy " + name + " " + lastname;
}

console.log("Hello " + sayMyName(1));

// REST Parameter
function sum(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((a, b) => a + b, 0); //reduce คือรับค่าต่างๆเข้ามา แล้ววนไปเรื่อยๆ
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Name Parameter
function add({ x, y }: { x: number; y: number }): number {
  return x + y;
}

console.log(add({ y: 5, x: 100 }));
