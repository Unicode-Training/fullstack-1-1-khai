let html = `<table width="100%" border="1" cellpadding="0" cellspacing="0">`;
let rows = 8;
let cols = 8;

//Xử lý vòng lặp tại đây
for (let i = 1; i <= rows; i++) {
  html = html + `<tr>`;

  //Tạo các cột
  for (let j = 1; j <= cols; j++) {
    const total = i + j;
    const className = total % 2 !== 0 ? `class="black"` : "";
    html = html + `<td ${className}></td>`;
  }

  html = html + `</tr>`;
}

html = html + `</table>`;

document.body.innerHTML = html;
