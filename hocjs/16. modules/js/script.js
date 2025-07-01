//Import
// - Import default
// - Import named

// import a from "./home.js";
// console.log(a);

// import something from "./home.js";
// something();

// import abc from "./home.js";
// const user = new abc();
// console.log(user);

// import c, { a, b as _b } from "./home.js";
// console.log(a);
// console.log(_b);
// console.log(c);

// import * as home from "./home.js";
// const { a, b, default: c } = home;
// console.log(a, b, c);

// import { var1 } from "../users/file1.js";
// import { var2 } from "../users/file2.js";
// import { var3 } from "../users/file3.js";
import { var1, var2, var3 } from "../users/index.js";
console.log(var1, var2, var3);
