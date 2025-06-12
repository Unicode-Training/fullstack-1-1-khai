// const root = document.querySelector("#root");
// const h1 = document.createElement("h1");
// h1.innerHTML = "Title 01";
// root.append(h1);

// const h2 = document.createElement("h2");
// h2.innerHTML = "Title 02";
// root.append(h2);

// const h3 = document.createElement("h3");
// h3.innerHTML = "Title 03";

//insertBefore(newNode, oldNode)
//Chèn h3 vào trước h2
// root.insertBefore(h3, h2);

// const p = document.createElement("p");
// p.innerHTML = "Paragraph";
// root.append(p);

//Coi như không biết sau h2 là thẻ p
//Giải pháp:
// Dùng nextElementSibling để tìm phần tử phía sau
// Dùng insertBefore để chèn vào trước tử phía sau đó
// const nextH2Element = h2.nextElementSibling;
// if (nextH2Element) {
//   root.insertBefore(h3, nextH2Element);
// }

//textNode: Node đặc biệt không thuộc 1 thẻ html, tuy nhiên có thể tự thay đổi
// const h1 = document.createElement("h1");
// h1.innerText = `Count: `;
// root.append(h1);
// // const span = document.createElement("span");
// // span.innerText = 0;
// // h1.append(span);
// const textNode = document.createTextNode(0);
// h1.append(textNode);

// const button = document.createElement("button");
// button.innerText = "+";
// root.append(button);
// button.addEventListener("click", function () {
//   //logic tăng
//   //   span.innerText++;
//   textNode.data++;
// });

const ul = document.querySelector("ul");
const liList = document.querySelectorAll("ul li");
liList.forEach((li) => {
  const up = li.querySelector(".up");
  const down = li.querySelector(".down");
  up.addEventListener("click", () => {
    const prevEl = li.previousElementSibling;
    if (!prevEl) {
      return;
    }
    //insertBefore
    ul.insertBefore(li, prevEl);
  });
  down.addEventListener("click", () => {
    const nextEl = li.nextElementSibling;
    if (!nextEl) {
      return;
    }
    ul.insertBefore(nextEl, li);
  });
});
