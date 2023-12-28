// funções

function addNumber(x: number, y: number): number {
  return x + y;
}

let soma: number = addNumber(4, 4);

// MuiltType Function
function CallToPhone(phone: number | string): number | string {
  return phone;
}

console.log(CallToPhone("12344424"));
console.log(CallToPhone(12345));
