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

//Thêm todo
buttonEl.addEventListener("click", function () {
  const value = inputEl.value;
  if (value) {
    const todo = {
      title: value,
      completed: false,
    };
    todoList.push(todo);
    inputEl.value = "";
    renderTodoList();
  }
});

const renderTodoList = function () {
  // console.log(todoList);
  const html = todoList
    .map(function (item) {
      // console.log(item);
      return `<li><input type="checkbox" ${
        item.completed ? "checked" : ""
      }/> <span class="${item.completed ? "completed" : ""}">${item.title}</span> <span class="remove">x</span></li>`;
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

  const completedList = document.querySelectorAll(
    '.todo-list input[type="checkbox"]'
  );
  completedList.forEach(function (item, index) {
    item.addEventListener("change", function () {
      const status = item.checked; //Lấy trạng thái của checkbox
      todoList[index].completed = status;
      renderTodoList();
    });
  });
};

/*
[
 {title: "Job 1", completed: false},
 {title: "Job 2", completed: false},
 {title: "Job 3", completed: false},
 {title: "Job 4", completed: false},
]
*/
