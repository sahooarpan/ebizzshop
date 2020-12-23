const printPattern = (n) => {
  let counter = 1;
  const outputMatrix = [];

  // creating increasing pattern
  for (let row = 1; row <= n; row++) {
    const currentRow = [];
    for (let col = 1; col <= row; col++) {
      currentRow.push(counter++);
    }
    outputMatrix.push(currentRow);
  }

  // mirrorring the matrix
  for (let row = outputMatrix.length - 2; row >= 0; row--) {
    outputMatrix.push(outputMatrix[row]);
  }

  // converting to string
  const outputString = outputMatrix
    .map((row) => row.join(" "))
    .reduce((acc, curr) => [acc, curr].join("\n"), "");
  console.log(outputString);
};

printPattern(3);
