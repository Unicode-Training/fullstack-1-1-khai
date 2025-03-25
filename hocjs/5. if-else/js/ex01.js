//Câu lệnh rẽ nhánh if else
/*
1. Câu lệnh if thiếu
if (dieukien) {
    Câu lệnh
}

2. Câu lệnh if else đầy đủ
if (dieukien) {
    Câu lệnh đúng
} else {
    Câu lệnh sai
}

3. Câu lệnh if else nhiều nhánh

if (dieukien1) {
    Câu lệnh 1
} else if (dieukien2) {
    Câu lệnh 2
} else {
    Câu lệnh 3
}

4. Câu lệnh if else lồng nhau
if (dieukien1) {
    if (dieukien2) {
        Câu lệnh 1
    } else {
        Câu lệnh 2 
    }
} else {
    Câu lệnh 3
}
*/

// let number = 9;
// let total = 0;
// if (number >= 10) {
//   total = total + 10;
// } else {
//   total = total + 5;
// }
// console.log(total);

let number = 30;
/*
- Nếu number < 0 --> Số âm
- Nếu number >= 0 và number < 5 --> Số nhỏ
- Nếu number >=5 và number < 10 --> Số trung bình
- Nếu number >= 10 --> Số lớn
*/
// if (number < 0) {
//   console.log("Số âm");
// } else if (number < 5) {
//   console.log("Số nhỏ");
// } else if (number < 10) {
//   console.log("Số trung bình");
// } else {
//   console.log("Số lớn");
// }

//Bài tập 1: Tính lương thực nhận của 1 nhân viên sau khi đã trừ thuế
/*
- Nếu lương cơ bản <= 5tr --> Thuế 0%
- Nếu lương cơ bản > 5tr và <= 10tr --> Thuế 3%
- Nếu lương > 10tr --> Thuế 5%
*/
// let salary = 11000;
// let income;
// let tax;

// //income = salary - salary * tax / 100
// if (salary > 0) {
//   if (salary <= 5000) {
//     tax = 0;
//   } else if (salary <= 10000) {
//     tax = 3;
//   } else {
//     tax = 5;
//   }
//   income = salary - (salary * tax) / 100;
//   console.log(income);
// } else {
//   console.log("Dữ liệu không hợp lệ");
// }

//Bài tập 2: Tính tiền taxi, cho trước số km cần di chuyển
/*
Số km <= 1 --> Giá 15000
Số km > 1 và <=5 --> Giá 13500
Số km > 5 --> Giá 11000
Nếu số km > 120 --> Giảm 10% trên tổng số tiền

Ví dụ: Đi 4km

1km x 15000 + 3km x 13500

Đi 6km

1km x 15000 + 4km x 13500 + 1km x 11000

Đi 200km

1km x 15000 + 4km x 13500 + 195km x 11000
*/

//Hằng số lưu trữ số km
const RANGE_1 = 1;
const RANGE_2 = 5;
const RANGE_3 = 120;

//Hằng số lưu trữ khoảng giá
const PRICE_1 = 15000;
const PRICE_2 = 13500;
const PRICE_3 = 11000;
const DISCOUNT = 10;

let km = 200;
let cost = 0;
if (km < RANGE_1) {
  cost = km * PRICE_1;
} else if (km < RANGE_2) {
  cost = RANGE_1 * PRICE_1 + (km - RANGE_1) * PRICE_2;
} else {
  cost =
    RANGE_1 * PRICE_1 +
    (RANGE_2 - RANGE_1) * PRICE_2 +
    (km - RANGE_2) * PRICE_3;
  if (km > RANGE_3) {
    cost = cost - (cost * DISCOUNT) / 100;
  }
}
console.log(cost);
