class User {
  //Thuộc tính
  name = null;
  email = null;
  //Phương thức khởi tạo (Chạy ngay sau khi instance được tạo)
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  //Phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    this.email;
  }

  //Thuộc tính static
  static message = "Hello anh em";
  //Phương thức static
  static getMessage() {
    return "Chào anh em JavaScript";
  }
}

class Admin extends User {
  role = null;
  #secret = "123";
  constructor(name, email, role) {
    super(name, email); //Gọi constructor của class cha và truyền đối số tương ứng
    this.role = role;
  }
  getInfo() {
    return `${this.name} - ${this.email}`;
  }
}
// const user = new User("Hoàng An Unicode", "hoangan.web@gmail.com");
// console.log(user);
// console.log(User.message);
// console.log(User.getMessage());
const admin = new Admin("Hoàng An Unicode", "hoangan.web@gmail.com", "admin");
console.log(admin);
console.log(admin.getInfo());
console.log(admin.role);
// console.log(admin.#secret);
