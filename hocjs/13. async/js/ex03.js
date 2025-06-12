//Error Handling
/*
try {
    Câu lệnh
} catch (error) {
    
} finally {
    
}

Thứ tự chạy: 

- try --> Nếu có lỗi --> Chuyển xuống catch --> Chuyển xuống finally
- Nếu không có lỗi thực thi lệnh trong try và chuyển xuống finally
*/

// try {
//   abc();
// } catch (error) {
//   console.log(error);
//   document.body.innerHTML = error.message;
// } finally {
//   console.log("Finally");
// }

// console.log("Start");
// try {
//   //   login();
//   let a = -1;
//   if (a < 0) {
//     throw new Error("a phải là số dương");
//   }
// } catch (error) {
//   console.log(error);
//   document.body.innerHTML = error.message;
// }
// console.log("End");

//Async Function: Viết code bất đồng bộ như đồng bộ
// - Async luôn trả về 1 promise
// - Cú pháp: Thêm từ khóa async phía trước function

//Từ khóa await:
// - Chỉ sử dụng trong async function
// - Đợi promise trả về kết quả, sau đó các lệnh bên dưới nó mới được thực thi
// - await chỉ có tác dụng để đợi promise
// Cách hiểu đơn giản: 1 lần await tương ứng với 1 lần then trong promise

// const userPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("User 1");
//     reject("Lỗi khi lấy user");
//   }, 2000);
// });
// async function something() {
//   //Sử dụng được từ khóa await
//   try {
//     const user = await userPromise;
//     console.log(user);
//     console.log("Something");
//   } catch (error) {
//     console.log(error);
//   }
// }
// something();

// const getUser = (userId) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const users = [
//         {
//           id: 1,
//           name: "User 1",
//           salary: 1000,
//         },
//         {
//           id: 2,
//           name: "User 2",
//           salary: 2000,
//         },
//         {
//           id: 3,
//           name: "User 3",
//           salary: 3000,
//         },
//       ];
//       const user = users.find((user) => user.id === userId);
//       resolve(user);
//     }, Math.random() * 2000);
//   });
// };
// const users = [1, 2, 3];
// //Bài tập: Tính tổng salary sử dụng async await
// const calcSalary = async () => {
//   let total = 0;
//   for (let i = 0; i < users.length; i++) {
//     const user = await getUser(users[i]);
//     total += user.salary;
//   }
//   console.log(total);
// };

// calcSalary();

const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      getData: () => {
        return new Promise((resolve) => {
          resolve("Unicode");
        });
      },
    });
  }, 2000);
});
const displayMessage = async () => {
  const data = await myPromise;
  const data2 = await data.getData();
  console.log(data2);
};
displayMessage();
