// Bubble Sort Algorithm
// Kendiden bir sonraki element ile kıyaslama yaparak sortlama işlemi.
//Soru : Given an array of integers, sort the array

// function bubbleSort(arr) {
//   let swapped = false;

//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
// const arr = [8, 20, -2, 4, -6];
// bubbleSort(arr);
// console.log(arr);

//Big-O -> O(n^2)

//INSERTION SORT
//Soru : Given an array of integers, sort the array
//const arr = [-6, 20, 8, -2, 4]
//insertionSort(arr) -> Should return [-6,-2,4,8,20]

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = numberToInsert;
//   }
//   return arr;
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(insertionSort(arr));

//Big-O => O(n^2)

//QuickSort (Recursion?)

function quickSort(arr) {
  //Recursion için bir base condition gerek.
  //Arrayin için de bir eleman kalınca condition devreye girer ve o eleman döner.
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1]; // -> arrayin son elemanını pivot olarak alırız.
  let leftArr = []; //-> pivottan küçük elementler
  let rightArr = []; //-> pivottan büyük elementler.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));

//Worst case -> Big-O => O(n^2)
//Avg Case -> Big-O => O(nlogn)
