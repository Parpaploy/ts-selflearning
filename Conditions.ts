if (true && true) {
  console.log("✅ Always executed.");
} else {
  console.log("❌ Never executed.");
}

if (false || true) {
  console.log("⛔️ Neverexecuted.");
}

let x1: number = 10,
  y1 = 20;

if (x1 < y1) {
  console.log("x1 น้อยกว่า y1");
} else if (true) {
} else {
}

x1 > y1 ? console.log("✅") : console.log("⛔️");

let selectMenu: number = 2;

switch (selectMenu - 1) {
  case 0:
    console.log("Hello");
    break;
  case 1:
    console.log("World");
    break;
  case 2:
    console.log("Hello World");
    break;
}
