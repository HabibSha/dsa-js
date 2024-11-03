const data = [17, 21, 11, 28, 9, 3, 50, 33];

for (let i = 0; i < data.length; i++) {
  console.log(i);

  for (let j = 0; j < data.length; j++) {
    console.log(j);

    if (data[j] > data[j + 1]) {
      const temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log(data);
