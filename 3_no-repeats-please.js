const permAlone = (str) => {
  const strArr = [...str];
  const perms = getPermutations(strArr);

  let count = 0;
  for (const perm of perms) {
    if (!/(.)\1+/.test(perm.join(""))) {
      count++;
    }
    //let hasRepeats = false;
    // for (let i = 0; i < perm.length - 1; i++) {
    //   if (perm[i] === perm[i + 1]) {
    //     hasRepeats = true;
    //     break;
    //   }
    // }
    // if (!hasRepeats) {
    //   count++;
    // }
  }

  return count;
};

const getPermutations = (arr) => {
  const output = [];
  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      //output.push([...heapArr]);
      output.push(heapArr.slice());
      return;
    }
    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 == 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }
      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
};

// const arr = [1,2,3]; // [ [1,2,3], [1,3,2] .... ]
// getPermutations(arr);
// console.log(arr)
// console.log(getPermutations([1, 2]));
// console.log(getPermutations([1, 2, 3]));
// console.log(getPermutations([1, 2, 3, 4]));

console.log(permAlone("aab"));
