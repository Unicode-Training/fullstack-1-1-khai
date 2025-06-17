/*
Cấu trúc API
+ URL
+ Method: GET, POST, PUT, PATCH, DELETE
+ Body: Dữ liệu gửi lên server
+ Headers: Thông tin đi kèm gửi lên server
*/
//fetch(url, options)
const serverApi = `http://localhost:3000`;
// fetch(`${serverApi}/users`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const getUsers = async (keyword = "") => {
  let url = `${serverApi}/users`;
  if (keyword) {
    url = `${serverApi}/users?q=${keyword}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  renderUsers(data);
};

const renderUsers = (users) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = users
    .map((user, index) => {
      return `<tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button class="edit-btn" data-id="${user.id}">Sửa</button>
          </td>
          <td>
            <button class="delete-btn" data-id="${user.id}">Xóa</button>
          </td>
        </tr>`;
    })
    .join("");
  const editBtnList = document.querySelectorAll(".edit-btn");
  editBtnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      getUser(id);
    });
  });
  const deleteBtnList = document.querySelectorAll(".delete-btn");
  deleteBtnList.forEach((btn) => {
    btn.addEventListener("click", async () => {
      if (confirm("Bạn có chắc?")) {
        const id = btn.dataset.id;
        const deleteStatus = await deleteUser(id);
        if (deleteStatus) {
          getUsers(); //Làm mới table
        }
      }
    });
  });
};

getUsers();

const getUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`);
  const data = await response.json();
  renderDataToFrom(data);
};

const renderDataToFrom = (data) => {
  const form = document.querySelector("form");
  const nameInput = form.querySelector(".name");
  const emailInput = form.querySelector(".email");
  const addressInput = form.querySelector(".address");
  form.dataset.id = data.id;
  if (nameInput) {
    nameInput.value = data.name;
  }
  if (emailInput) {
    emailInput.value = data.email;
  }
  if (addressInput) {
    addressInput.value = data.address;
  }
};

const submitFrom = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameInput = form.querySelector(".name");
    const emailInput = form.querySelector(".email");
    const addressInput = form.querySelector(".address");
    const name = nameInput.value;
    const email = emailInput.value;
    const address = addressInput.value;
    const id = form.dataset.id;

    //Gọi API Update
    // - id của user cần update
    // - data cần update
    const updateStatus = await updateUser(id, {
      name,
      email,
      address,
    });
    if (updateStatus) {
      //Cập nhật thành công
      getUsers(); //Làm mới table
      form.reset();
    }
  });
};
submitFrom();

const updateUser = async (id, data) => {
  const response = await fetch(`${serverApi}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};

const deleteUser = async (id) => {
  const response = await fetch(`${serverApi}/users/${id}`, {
    method: "DELETE",
  });
  return response.ok;
};

//Kỹ thuật debounce
// - Dựa vào thời gian nghỉ
// - Thường từ 300ms -> 500ms
const debounce = (callback, timeout = 500) => {
  //Giúp delay callback
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

const searchUsers = () => {
  const searchInput = document.querySelector(".search");
  searchInput.addEventListener(
    "keyup",
    debounce(() => {
      const keyword = searchInput.value;
      getUsers(keyword);
    })
  );
};
searchUsers();
