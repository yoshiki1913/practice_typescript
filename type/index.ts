let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -100;
let str: string = 'Type Script';


// オブジェクトの記述方法
const person: {
    name: string;
    age: number
} = {
    name: 'Jack',
    age: 21
}

// 配列に型をつける

// string型
const fruit: string[] = ['Apple', 'Banana', 'Grape'];

// タプル型
const book: [string, number, boolean] = ['biziness', 2000, true];

// 列挙型
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffie = {
    hot: true,
    size: CoffeeSize.TALL
}

coffie.size = CoffeeSize.VENTI;

console.log(coffie);
