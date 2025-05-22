// const liList = document.querySelectorAll("ul li");
// liList.forEach(function (li) {
//   li.addEventListener("click", function () {
//     //Chọn phần tử đang active
//     const activeItem = document.querySelector("ul li.active");

//     li.classList.toggle("active");

//     if (activeItem) {
//       activeItem.classList.remove("active");
//     }
//   });
// });

const inputEl = document.querySelector(".todo-form input");
const buttonEl = document.querySelector(".todo-form button");
const todoListEl = document.querySelector(".todo-list");
const todoList = [];
buttonEl.addEventListener("click", function () {
  const value = inputEl.value;
  if (value) {
    todoList.push(value);
    inputEl.value = "";
    renderTodoList();
  }
});

const renderTodoList = function () {
  const html = todoList
    .map(function (item) {
      return `<li>${item} <span class="remove">x</span></li>`;
    })
    .join("");
  todoListEl.innerHTML = html;

  //Chọn tất cả các thẻ span trong li
  const removeList = document.querySelectorAll(".todo-list .remove");
  removeList.forEach(function (item, index) {
    item.addEventListener("click", function () {
      //Xác định index của item vừa click
      //   console.log(index);
      //Xóa phần tử theo index trong mảng todoList
      if (index > -1) {
        todoList.splice(index, 1);
      }
      //Gọi lại hàm renderTodoList để cập nhật giao diện
      renderTodoList();
    });
  });
};
