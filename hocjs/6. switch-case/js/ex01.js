/*
Switch Case: Câu lệnh rẽ nhánh
- Chỉ chấp nhận so sánh bằng (===)
- Phù hợp với dạng quá nhiều nhánh và có nhiều điều kiện OR
- Kém linh hoạt hơn so với if else
*/
let action = "destroy1";
//Nếu action === "create" --> Thêm
//Nếu action === "update" --> Cập nhật
//Nếu action === "delete" --> Xóa
//Các trường hợp khác --> Không hợp lệ
switch (action) {
  case "create":
  case "add":
  case "insert":
    console.log("Thêm");
    break;
  case "update":
  case "edit":
    console.log("Cập nhật");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;
  default:
    console.log("Không hợp lệ");
    break;
}

//Bài tập: Chuyển đoạn code trên thành dạng if else
if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm");
} else if (action === "update" || action === "edit") {
  console.log("Cập nhật");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Không hợp lệ");
}
