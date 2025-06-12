//Promise
/*
B1: Hứa
- Resolve
- Reject

B2: Thực thi
- Then
- Catch

--> Finally
*/

const getUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000,
        },
      ];
      const user = users.find((user) => user.id === userId);
      resolve(user);
    }, Math.random() * 2000);
  });
};

// getUser(1).then((data) => {
//   console.log(data);
// });

const users = [1, 2, 3];
//Tính tổng salary của các user trong mảng users
/*
B1: Lặp qua từng phần tử của mảng users
B2: Lấy userId của từng user
B3: Gọi hàm getUser() để lấy salary từng user
B4: Cộng tất cả salary và trả về kết quả

Giải pháp: Đưa kết quả tính toán vào Promise mới
*/
// const resultPromise = new Promise((resolve) => {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < users.length; i++) {
//     const userId = users[i];
//     getUser(userId).then((data) => {
//       total += data.salary;
//       count++;
//       if (count === users.length) {
//         resolve(total);
//       }
//     });
//   }
// });

// resultPromise.then((data) => {
//   console.log(data);
// });

//Multipe Promise --> Promise.all()
/*
Promise.all(promiseArray)
- promiseArray --> Mảng chứa các promise cần xử lý (Thường dùng map để tạo ra)
- Kết quả của Promise.all là 1 mảng chứa kết quả của từng Promise trong promiseArray
*/
// const promiseArray = users.map((userId) => getUser(userId));
// Promise.all(promiseArray).then((data) => {
//   console.log(data);

//   //data là 1 mảng chứa kết quả của từng Promise trong promiseArray
//   const total = data.reduce((total, user) => total + user.salary, 0);
//   console.log(total);
// });

// setTimeout(() => {
//   console.log(1);
// }, 0);
// Promise.resolve(3).then((data) => {
//   console.log(data);
// });
// console.log(2);
