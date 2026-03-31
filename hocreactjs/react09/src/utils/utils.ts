// export const something = (a: number, b: number): number => {
//   console.log(a);
//   console.log(b);
//   const total: number = a + b;
//   console.log(total);
//   return total;
// };

export const something2 = (): void => {
  //   const myArr: number[] = [1, 2, 3, 4, 5];
  //   console.log(myArr);
  //   const myArr: string[] = ["1", "2", "3", "4", "5"];
  //   console.log(myArr);
  //   const myArr: [string, boolean, number] = ["An", false, 30];
  //   console.log(myArr);
  //   const user: {
  //     name: string;
  //     email: string;
  //     status: boolean;
  //     age?: number;
  //     active: boolean | string;
  //     info: {
  //       address: string;
  //     };
  //   } = {
  //     name: "Hoàng An",
  //     email: "hoangan.web@gmail.com",
  //     status: false,
  //     age: 33,
  //     active: false,
  //     info: {
  //       address: "Hà Nội",
  //     },
  //   };
  //   console.log(user);
  //Bài tập
  //   const users: {
  //     id: number;
  //     name: string;
  //   }[] = [
  //     {
  //       id: 1,
  //       name: "Nguyễn Văn A",
  //     },
  //     {
  //       id: 2,
  //       name: "Nguyễn Văn B",
  //     },
  //     {
  //       id: 3,
  //       name: "Nguyễn Văn C",
  //     },
  //   ];
  //   console.log(users);
  //   type User = {
  //     name: string;
  //     age: number;
  //     status: boolean;
  //   };
  //   type Employee = {
  //     address: string;
  //     details: User;
  //   };
  //   const employee: Employee = {
  //     address: "Hà Nội",
  //     details: {
  //       name: "Hoàng An",
  //       age: 33,
  //       status: false,
  //     },
  //   };
  //   console.log(employee);
  //   const user: User = {
  //     name: "Hoàng An",
  //     age: 33,
  //     status: false,
  //   };
  //   console.log(user);
  //   const customer: User = {
  //     name: "Nguyễn Văn A",
  //     age: 30,
  //     status: true,
  //   };
  //   console.log(customer);
  //   interface User {
  //     name: string;
  //     age: number;
  //     status: boolean;
  //   }
  //   interface Auth extends User {
  //     role: string;
  //     login: () => void;
  //   }
  //   const auth: Auth = {
  //     name: "Hoàng An",
  //     age: 33,
  //     status: false,
  //     role: "Admin",
  //     login: () => {
  //       console.log("User logged in");
  //     },
  //   };
  //   console.log(auth);
  //   const x: unknown = "10";
  //   //   console.log((x as string).toUpperCase());
  //   if (typeof x === "string") {
  //     console.log(x.toUpperCase());
  //   }
  //   type User = {
  //     name: string;
  //     age: number;
  //   };
  //   type Customer = {
  //     address: string;
  //   };
  //   const a: User & Customer = {
  //     name: "Hoàng An",
  //     age: 33,
  //     address: "Hà Nội",
  //   };
  //   console.log(a);
  //Generic: Truyền kiểu dữ liệu khi gọi hàm
  //   type User<T> = {
  //     name: string;
  //     age: number;
  //     details: T;
  //   };
  //   const user1: User<{
  //     address: string;
  //   }> = {
  //     name: "Hoàng An",
  //     age: 33,
  //     details: {
  //       address: "Hà Nội",
  //     },
  //   };
  //   console.log(user1);
};

//any: Chấp nhận tất cả kiểu dữ liệu
//unknown: Chưa biết trước kiểu dữ liệu là gì, yêu cầu kiểm tra trước khi sử dụng

//string: Chuỗi
//number: Số
//boolean: Logic
//null:
//undefined
//symbol

//void: Hàm không có giá trị trả về

//type: Kiểu do lập trình viên tự định nghĩa bằng cách kết hợp các kiểu khác
//interface: Giống type, nhưng có kể kế thừa
