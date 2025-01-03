// const data = [17, 21, 11, 28, 9, 3, 50, 33];

// for (let i = 0; i < data.length; i++) {
//   console.log(i);

//   for (let j = 0; j < data.length; j++) {
//     console.log(j);

//     if (data[j] > data[j + 1]) {
//       const temp = data[j];
//       data[j] = data[j + 1];
//       data[j + 1] = temp;
//     }
//   }
// }

// console.log(data);

// const data = [17, 21, 11, 28, 9, 3, 50, 33];

// for (let i = 0; i < data.length; i++) {
//   console.log(i);

//   for (let j = 0; j < data.length; j++) {
//     console.log(j);

//     for (let k = 0; k < data.length; k++) {
//       console.log(k);
//     }
//   }
// }

// console.log(data);

// const data = [17, 21, 11, 28, 9, 3, 50, 33];

// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data.length; j++) {
//     if (data[j] > data[j + 1]) {
//       const temp = data[j];
//       data[j] = data[j + 1];
//       data[j + 1] = temp;
//     }
//   }
// }

// console.log(data);

// Binary search
const data = [5, 9, 13, 17, 23, 30, 45, 61];

const findEl = 30;
let startEl = 0;
let endEl = data.length - 1;
let position = undefined;

while (startEl <= endEl) {
  const midEl = Math.floor((startEl + endEl) / 2);
  if (data[midEl] === findEl) {
    position = midEl;
    break;
  } else if (data[midEl] < findEl) {
    startEl = midEl + 1;
  } else {
    endEl = midEl - 1;
  }
}

if (position !== undefined) {
  console.log(`The finding value: ${findEl} is at index: ${position}`);
} else {
  console.log(`The value: ${findEl} is not found in array`);
}

// todo: random topics outside of dsa
// nested object

// const person = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     zipCode: "12345",
//   },
//   hobbies: ["reading", "gaming"],
// };

// for (const key in person) {
//   if (typeof person[key] === "object" && !Array.isArray(person[key])) {
//     console.log(`Nested key: ${key}`);
//     for (const subKey in person[key]) {
//       console.log(`Subkey: ${subKey} = ${person[key][subKey]}`);
//     }
//   } else {
//     console.log(`${key} = ${person[key]}`);
//   }
// }
