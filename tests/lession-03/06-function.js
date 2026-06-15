//1 Hàm nhân 2 số
function multiply(a, b) {
    console.log(a * b);
}
multiply(5, 10);
multiply(10, 20);

//2 Hàm tìm số nhỏ nhất

function findMin(a, b, c) {
    if (a < b && a < c) {
        console.log(a)
    }
    if (b < a && b < c) {
        console.log(b)
    }
    if (c < b && c < a) {
        console.log(c)
    }
}
findMin(5, 10, 30);
findMin(-5, 50, -7);

//2 Hàm lấy thông tin học sinh

function getTopStudent(student, threshold) {
    if (student.score >= threshold) {
        console.log(student)
    }
}
getTopStudent({ name: "Ray", score: 7 }, 6);
getTopStudent({ name: "Minh", score: 4 }, 6);
getTopStudent({ name: "Bảo", score: 8 }, 6);
getTopStudent({ name: "Thanh", score: 2 }, 6);

// 4. Hàm CalulateInterest

function calculateInterest(pricipal, rate, year) {
    total = pricipal + pricipal*rate*year/100
    console.log(`Số tiền lãi cộng gốc : ${total}`)
}
calculateInterest(25000000, 10, 3);
