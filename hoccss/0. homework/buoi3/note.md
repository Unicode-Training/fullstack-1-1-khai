## Bài 1: Chọn phần tử cụ thể

Cho đoạn HTML sau:

```
<div class="container">
  <p class="text">Đây là đoạn văn 1</p>
  <p>Đây là đoạn văn 2</p>
  <p class="text">Đây là đoạn văn 3</p>
  <span class="text">Đây là một span</span>
</div>
```

Yêu cầu:

Viết CSS để thay đổi màu chữ của tất cả các thẻ <p>.
Chỉ thay đổi màu chữ của các thẻ <p> có class text.
Chỉ thay đổi màu chữ của các phần tử <p> nằm trong div.container.

## Bài 2: Hover và Focus

Cho đoạn HTML sau:

```
<button class="btn">Bấm vào tôi</button>
<input type="text" class="input-box" placeholder="Nhập gì đó...">
```

Yêu cầu:

Khi di chuột vào nút button, thay đổi màu nền.
Khi input được focus (người dùng nhập liệu), đổi màu viền của nó.

## Bài 3: nth-child và nth-of-type

Cho đoạn HTML sau:

```
<ul>
  <li>Mục 1</li>
  <li>Mục 2</li>
  <li>Mục 3</li>
  <li>Mục 4</li>
  <li>Mục 5</li>
</ul>
```

Yêu cầu:

Tô màu chữ đỏ cho tất cả các mục có số thứ tự chẵn.
Tô màu chữ xanh cho mục đầu tiên.
Tô màu chữ cam cho mục cuối cùng.

## Bài 4: Before và After

Cho đoạn HTML sau:

```
<h2 class="title">Tiêu đề chính</h2>
```

Yêu cầu:

Thêm một dấu "🔥" phía trước tiêu đề.
Thêm một gạch ngang dưới tiêu đề bằng ::after.

## Bài 5: First-letter và First-line

Cho đoạn HTML sau:

```
<p class="content">
  Đây là một đoạn văn bản dài. Hãy sử dụng Pseudo Element để làm nổi bật chữ cái đầu tiên và dòng đầu tiên của đoạn văn.
</p>
```

Yêu cầu:

Làm chữ cái đầu tiên của đoạn văn to hơn và có màu đỏ.
Làm cho dòng đầu tiên có kiểu chữ in nghiêng.
