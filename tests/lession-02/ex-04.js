const height = 172;

if (height > 100) {
    let cannanglytuong = (height - 100) * 9 / 10;
    let cannangtoida = height - 100;
    let cannangtoithieu = (height - 100) * 8 / 10;

    console.log("Cân nặng lý tưởng của bạn là: " + cannanglytuong + "kg", "Cân nặng tối đa của bạn là: " + cannangtoida + "kg", "Cân nặng tối thiểu của bạn là: " + cannangtoithieu + "kg");
}