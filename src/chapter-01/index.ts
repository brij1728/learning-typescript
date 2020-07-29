// type Context = {
//   appId?: string;
//   userId?: string;
// };

function log(message: string, userId: "Not signed in") {
  let time = new Date().toISOString();

  console.log(time, message, userId);
}
// log("How are you");

// =========== using rest parameter ==========
function sum(numbers: number[]): number {
  return numbers.reduce((sum, n) => sum + n, 0);
}

const totalSum = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(totalSum); // 55

function sums(...numbers: number[]): number {
  return numbers.reduce((sum, n) => sum + n, 0);
}

const sumsAre = sums(1, 2, 3, 45, 23);
console.log(sumsAre);

// ============ call, apply and bind ==========
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20)); // evaluatesto 30
console.log(add.apply(null, [10, 20])); // evaluatesto 30
console.log(add.call(null, 10, 20)); // evaluatesto 30
console.log(add.bind(null, 10, 20)()); // evaluatesto 30

//=======getting date ========
function fancyDate(this: Date) {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}

console.log(fancyDate.call(new Date()));

// ========== generators =============
function* createNumbers(): IterableIterator<number> {
  let n = 0;
  while (1) {
    yield n++;
  }
}

let numbers = createNumbers();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

// ========= arrow function ========
const scores: number[] = [
  23,
  14,
  34,
  26,
  93,
  73,
  57,
  70,
  50,
  39,
  45,
  42,
  20,
  10,
  40,
];
let highScores: number[];

// highScores = scores.filter((element) => {
//   if (element > 40) {
//     return true;
//   }
// });

// console.log(highScores);

// =========== call signatures ===========
type Log = (message: string, userId?: string) => void;

let logs: Log = (message, userId = "Not signed in") => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};

logs("Hello, how are you");

// ====== contextual typing ==========
function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}
times((n) => console.log(`Number is ${n}`), 4);

//
function getMonth(date: Date): number {
  return date.getMonth();
}

console.log(getMonth(new Date()));

// ============generic type================
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}

type Food = {
  calories: number;
  tasty: boolean;
};

type Sushi = Food & {
  salty: boolean;
};

type Cake = Food & {
  sweet: boolean;
};
