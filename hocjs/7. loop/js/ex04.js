let html = `<table width="100%" border="1" cellpadding="0" cellspacing="0">`;

/*
Row 1 - Begin
*/
let rows = 5;

html = html + `<tr>`;
for (let i = 1; i <= rows; i++) {
  html = html + `<th>${i}</th>`;
}
html = html + `</tr>`;

html = html + `<tr>`;

for (let i = 1; i <= rows; i++) {
  html = html + `<td>`;

  for (let j = 1; j <= 10; j++) {
    html = html + `${i} x ${j} = ${i * j}<br/>`;
  }

  html = html + `</td>`;
}

html = html + `</tr>`;
/*
Row 1 - End
*/

/*
Row 2 - Begin
*/
rows = 10;

html = html + `<tr>`;
for (let i = rows - 4; i <= rows; i++) {
  html = html + `<th>${i}</th>`;
}
html = html + `</tr>`;

html = html + `<tr>`;

for (let i = rows - 4; i <= rows; i++) {
  html = html + `<td>`;

  for (let j = 1; j <= 10; j++) {
    html = html + `${i} x ${j} = ${i * j}<br/>`;
  }

  html = html + `</td>`;
}

html = html + `</tr>`;
/*
Row 2 - End
*/

html = html + `</table>`;

document.body.innerHTML = html;
