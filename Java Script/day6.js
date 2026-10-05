function addition() {
  let a = 10;
  let b = 20;
  let c = 30;

  return function getAddition() {
    return a + b;
  };
}

//  getAddition
let add = addition();
console.log(add());