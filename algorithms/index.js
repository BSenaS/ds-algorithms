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

// function quickSort(arr) {
//   //Recursion için bir base condition gerek.
//   //Arrayin için de bir eleman kalınca condition devreye girer ve o eleman döner.
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1]; // -> arrayin son elemanını pivot olarak alırız.
//   let leftArr = []; //-> pivottan küçük elementler
//   let rightArr = []; //-> pivottan büyük elementler.
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }
//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(quickSort(arr));

//Worst case -> Big-O => O(n^2)
//Avg Case -> Big-O => O(nlogn)

//Merge Sort(Recursion)
//1.Arrayi 1 elemanı kalana kadar daha kücük parçalara böl.

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     //Recursion için base condition
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0, mid); // -> ortanca elemana kadar olan elemanları içerir
//   const rightArr = arr.slice(mid); //-> orta elemandan sonraki elemanları içerir (orta eleman dahil)
//   //Arrayi 1 elemanı kalan kadar bölüp, merge elemanına parse olarak veriyoruz.
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// //2.Aşama
// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }
// const arr = [8, 20, -2, 4, -6];
// console.log(mergeSort(arr));

//CARTESIAN PRODUCT
// function cartesianProduct(arr1, arr2) {
//   const newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       let tempArr = [];
//       tempArr.push(arr1[i], arr2[j]);
//       newArr.push(tempArr);
//     }
//   }
//   return newArr;
// }

// const arr1 = [1, 2];
// const arr2 = [3, 4, 5];
// console.log(cartesianProduct(arr1, arr2));

// function climbinStairCase(n) {
//   const noOfWays = [1, 2];

//   for (let i = 2; i <= n; i++) {
//     noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
//   }
//   return noOfWays[n - 1];
// }

// const object1 = {
//   a: "somestring",
//   b: 42,
// };

// for (const [key] of Object.entries(object1)) {
//   console.log(`${key}`);
// }

//Map

// const map1 = new Map();
// map1.set("a", "1");
// map1.set("b", "2");
// map1.set("c", "3");
// for (const [key, value] of map1) {
//   console.log(`${key},${value}`);
// }

//Queue with Array impl.
//FIFO -> FIRST IN , FIRST OUT

// class Queue {
//   //Class içerisinde bir arr init ederiz.
//   constructor() {
//     this.items = [];
//   }

//   //metodlar

//   //1.enque -> arrayin sonuna element ekler.
//   enqueue(element) {
//     this.items.push(element);
//   }

//   //2.Arrayin başından elementi siler.
//   dequeue(element) {
//     return this.items.shift(element);
//   }

//   //3.isEmpty metod
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   //4.peek, isEmpty(false) ise, arrayin ilk elementini döndürürüz. True ise null döndürürüz.
//   peek() {
//     if (!this.isEmpty) {
//       return this.items[0];
//     } else {
//       return null;
//     }
//   }
//   //5.arrayin uzunlugunu döndürürüz.
//   size() {
//     return this.items.length;
//   }

//   //6.Arrayin içerisindeki elemanları dön.
//   print() {
//     console.log(this.items.toString());
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);

// console.log(queue.size());
// queue.print();

// console.log(queue.dequeue());
// queue.print();

// Queue with Object impl.
// FIFO -> FIRST IN , FIRST OU
//Object impl. kullanma sebebimiz : enque ve deque arraylerde lineer Big-O ya sahip, obje de ise bunu Constant time complexitye çeviriyoruz.
// class Queue {
//   constructor() {
//     this.items = {};
//     //initializing two pointers.
//     this.rear = 0;
//     this.front = 0;
//   }

//   //Objelerde insertion order tutulmadığı için kendimiz tutmak zorundayız.
//   //enque -> list'in başına element ekler.
//   enqueue(element) {
//     this.items[this.rear] = element;
//     this.rear++;
//   }

//   //Baştan çıkarma yap, frontu'ı arttır [indexleme]
//   dequeue() {
//     const item = this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return item;
//   }

//   isEmpty() {
//     return this.rear - this.front === 0;
//   }

//   peek() {
//     return this.items[front];
//   }

//   size() {
//     return this.rear - this.front;
//   }

//   print() {
//     console.log(this.items);
//   }
// }

// const queue = new Queue();

// queue.enqueue(5);
// queue.enqueue(30);
// queue.enqueue(42);

// queue.print();
// queue.dequeue();
// queue.enqueue(55);
// queue.print();
// console.log(queue.isEmpty());
// console.log(queue.size());

//Eğer fix size quelar ile uğraşıyorsan iyi bir tercih.
//0 -> dan kaldırılan elementin yerine yeni bir element koyulabilir.
// class CircularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.currentLength = 0;
//     this.rear = -1;
//     this.front = -1;
//   }
//   isFull() {
//     return this.currentLength === this.capacity;
//   }
//   isEmpty() {
//     return this.currentLength === 0;
//   }
//   //rear -> 3
//   //capacity -> 5
//   // (3 + 1) % 5 = 4
//   enqueue(element) {
//     if (!this.isFull()) {
//       this.rear = (this.rear + 1) % this.capacity;
//       this.items[this.rear] = element;
//       this.currentLength += 1;
//       if (this.front === -1) {
//         this.front = this.rear;
//       }
//     }
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     const item = this.items[this.front];
//     this.items[this.front] = null;
//     this.front = (this.front + 1) % this.capacity;
//     this.currentLength -= 1;
//     if (this.isEmpty()) {
//       this.front = -1;
//       this.rear = -1;
//     }
//     return item;
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[this.front];
//     }
//     return null;
//   }
//   print() {
//     if (this.isEmpty) {
//       console.log("Que is empty");
//     } else {
//       let i;
//       let str = "";
//       for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//         str += this.items[i] + " ";
//       }
//       str += this.items[i];
//       console.log(str);
//     }
//   }
// }
