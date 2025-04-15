// let str = "123A";
//Kiểm tra trong chuỗi str có chữ thường hay không?
// let isCheck = false;
// for (let i = 0; i < str.length; i++) {
//   const charCode = str.charCodeAt(i);
//   if (charCode >= 97 && charCode <= 122) {
//     isCheck = true;
//     break;
//   }
// }
// if (isCheck) {
//   console.log("Có chữ thường");
// } else {
//   console.log("Không có chữ thường");
// }

let password = "Hoangan@11111";
//Kiểm tra password là mạnh hay yếu?
/*
- Độ dài: Từ 8 ký tự trở lên
- Có ít nhất 1 ký tự hoa
- Có ít nhất 1 ký tự thường
- Có ít nhất 1 số
- Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()
*/
let isLength = false;
let isLowercase = false;
let isUppercase = false;
let isNumber = false;
let isSpecial = false;
if (password.length >= 8) {
  isLength = true;
  let specials = "!@#$%^&*()";
  let number = "0123456789";
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    const char = password.charAt(i);

    //Kiểm tra chữ thường
    if (charCode >= 97 && charCode <= 122) {
      isLowercase = true;
    }

    //Kiểm tra chữ hoa
    if (charCode >= 65 && charCode <= 90) {
      isUppercase = true;
    }

    //Kiểm tra số
    if (number.includes(char)) {
      isNumber = true;
    }

    //Kiểm tra ký tự đặc biệt
    if (specials.includes(char)) {
      isSpecial = true;
    }
  }
}

if (isLength && isUppercase && isLowercase && isNumber && isSpecial) {
  console.log("Mật khẩu mạnh");
} else {
  console.log("Mật khẩu yếu");
}
