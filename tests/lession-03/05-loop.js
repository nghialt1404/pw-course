//1 - Tổng 1-100
const arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(i);
}
console.log(arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);

//2 - In bảng cửu chương từ 2->9

for (let i = 2; i <= 9; i++) {
    console.log(`====Bảng cửu chương ${i} =====`)
    for (let j = 0; j <= 10; j++) {
        console.log(`${i}*${j} =${i * j}`)
    }
}
//3 - Tạo 1 mảng chứa các số lẻ từ 1->99

const arr1 = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        arr1.push(i);
    }
}
console.log(arr1);

//4 - In 10 email

for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
}

//5 - Tính tổng doanh thu 12 tháng
let revenues = [
    { month: 1, total: 200 },
    { month: 2, total: 100 },
    { month: 3, total: 300 },
    { month: 4, total: 400 },
    { month: 5, total: 500 },
    { month: 6, total: 600 },
    { month: 7, total: 700 },
    { month: 8, total: 800 },
    { month: 9, total: 900 },
    { month: 10, total: 1000 },
    { month: 11, total: 1100 },
    { month: 12, total: 1200 }
];
let tongdoanhthu = 0;
for (let i = 0;i<revenues.length;i++){
    tongdoanhthu = tongdoanhthu + revenues[i].total
}
console.log(`Tổng doanh thu :${tongdoanhthu}`)

