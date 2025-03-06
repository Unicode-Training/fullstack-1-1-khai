# Lộ trình

1. Front-End

- HTML + CSS + SCSS
- JavaScript
- Thư viện / Framework: ReactJS, NextJS
- Làm dự án
- Deploy

==> Xử lý giao diện người dùng, bao gồm các tương tác giữa người dùng và máy chủ (Back-End)

2. Back-End

- TypeScript
- Cách JavaScript chạy trên máy chủ (NodeJS)
- Framework: ExpressJS -> NestJS
- Database: MySQL/MariaDB
- Kiến thức của Back-End nói chung
- Làm dự án
- Deploy

# Cách website hoạt động

Client => Thông qua HTTP => Gửi yêu cầu tới Server => Xử lý => Thông qua HTTP => Trả về dữ liệu cho Client

## Nếu truy cập thông qua tên miền

Bước 1: User => Gõ tên miền trên trình duyệt => Gửi yêu cầu tới DNS Server (Máy chủ phân giải tên miền) => Trả về IP cho trình duyệt

Bước 2: Trình duyệt sẽ gửi yêu cầu tới máy chủ có địa chỉ IP vừa nhận được

# Cấu tạo của HTTP Request - HTTP Response

## HTTP Request: Yêu cầu gửi lên Server thông qua HTTP

- URL: Đường dẫn của máy chủ
- Method: Phương thức gửi (GET, POST, PUT, PATCH, DELETE)
- Headers: Thông tin đi kèm của yêu cầu
- Body: Nội dung chính cần gửi lên

## HTTP Response: Phản hồi từ Server trả về

- Status: Trạng thái
- Headers: Thông tin đi kèm mà server trả về
- Body: Nội dung chính server trả về

Lưu ý: HTTP là giao thức không liên tục

# HTML

- Ngôn ngữ đánh dấu siêu văn bản
- Cấu tạo bởi các thẻ
- Rất nhiều thẻ, chỉ cần học khoảng 30 thẻ

## Nguyên tắc viết html

- Mở và đóng thẻ theo đúng thứ tự
- Thẻ html có thể viết lồng nhau nhưng phải tuân thủ nguyên tắc đóng mở
- Thẻ block bọc thẻ inline (Không được viết ngược lại)

## Inline và Block

1. Inline

- Chiều rộng mặc định bằng với nội dung của thẻ
- Các thẻ inline đứng cạnh nhau sẽ nằm trên 1 dòng
- Không thể thay đổi width, height của thẻ inline

2. Block

- Chiều rộng mặc định bằng với chiều rộng của thẻ cha
- Mỗi thẻ block sẽ nằm ở 1 hàng
- Thay đổi width, height

## Cấu tạo thẻ HTML

1. Thẻ đầy đủ

<tenthe thuoctinh1="giatri1" thuoctinh2="giatri2">Nội dung</tenthe>

2. Thẻ tự đóng

<tenthe thuoctinh1="giatri1" thuoctinh2="giatri2" />

## Comment trong HTML

- Chú thích để giải thích về đoạn code đang viết
- Trình duyệt không biên dịch nội dung chú thích

## Các thẻ block

1. Heading: Định dạng tiêu đề trong trang web

```
<h1>Nội dung tiêu đề</h1>
<h2>Nội dung tiêu đề</h2>
<h3>Nội dung tiêu đề</h3>
<h4>Nội dung tiêu đề</h4>
<h5>Nội dung tiêu đề</h5>
<h6>Nội dung tiêu đề</h6>
```

- Chỉ sử dụng khi muốn nhấn mạnh nội dung là tiêu đề
- Trong 1 trang web chỉ có 1 thẻ h1 (Đảm bảo nguyên tắc về SEO)
- Các thẻ heading phải liên tiếp nhau (Không được nhảy cóc)
- Không dựa vào giao diện để quyết định chọn thẻ heading

===> Semantic (Ngữ nghĩa)

2. Thẻ đoạn văn

```
<p>Nội dung đoạn văn</p>
```

- Nội dung chỉ là văn bản
- Có thể áp dụng các thẻ inline: Ngắt dòng, định dạng (in đậm, nghiêng, gạch chân), chèn liên kết

3. Thẻ phân chia nội dung (div)

- Không có ý nghĩa (non-semantic)
- Gộp các thẻ html khác thành 1 khối
- Không thay đổi định dạng (Trừ phi có sự can thiệp của CSS)

4. Thẻ định dạng danh sách

4.1. Danh sách không sắp xếp

```
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
<ul>
```

4.1. Danh sách sắp xếp

```
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
<ul>
```

5. Thẻ gạch ngang (hr)

6. Thẻ pre

- Giữ nguyên định dạng, khoảng cách từ server trả về

```
<pre>
    Nội dung
</pre>
```

## HTML Entity

Dạng thực thể của html

< => &lt;

> => &gt;

Tác dụng:

- Không bị trình duyệt thay đổi hoặc biên dịch
- Khắc phục lỗi bảo mật XSS

## Các thẻ inline

1. Thẻ chèn liên kết

a = anchor

```
<a href="dia_chi_trang_web">Nội dung hiển thị</a>
```

Thuộc tính:

- href: Địa chỉ trang web (URL) hoặc đường dẫn tương đối
- title: Tiêu đề khi trỏ chuột vào liên kết
- target: Cửa sổ sẽ mở liên kết

* `_self`: Mở ở tab hiện tại
* `_blank`: Mở ở tab mới

Đường dẫn tương đối: Bị ảnh hưởng nếu thay đổi cấp thư mục

```
Loại 1: ./duong-dan hoặc duong-dan
Loại 2: ../duong-dan
```

Đường dẫn tuyệt đối: Không bị ảnh hưởng bởi cấp thư mục

```
Loại 1: URL đầy đủ (http://tenmien/duong-dan)
Loại 2: /duong-dan (Đẩy về gốc của url)
Loại 3: //tenmien/duong-dan
```

Giải thích:

Tên miền hiện tại: http://127.0.0.1:63130

//tenmien --> Nối giao thức hiện tại: http: + //tenmien -> http://tenmien -> http://google.com

2. Thẻ chèn hình ảnh (img)

```
<img src="duong-dan-anh" alt="Nội dung thay thế" title="Tiêu đề khi trỏ chuột" width="chieu-rong" height="chieu-cao"/>
```

3. Thẻ định dạng kiểu (span)

- span: Thẻ html non-semantic (Không có ý nghĩa)
- Hỗ trợ định dạng inline (Có sự can thiệp của css)

## Form (Biểu mẫu)

Cấu tạo của form

Form => Danh sách các trường và nút gửi

Các form không được lồng nhau

- action: URL của server để gửi dữ liệu lên
- method: Phương thức gửi dữ liệu: GET, POST

## Đặt tên class, id

- Sử dụng danh từ, đặt bằng Tiếng Anh
- Dùng chữ thường, nối với nhau bởi gạch ngang
- Không được bắt đầu bằng số

Lưu ý:

id: Chỉ được đặt 1 id trong 1 thẻ html, không nên đặt trùng id với các thẻ khác
class: Có thể đặt nhiều class trong 1 thẻ html, mỗi class cách nhau bởi dấu cách

# Ngôn ngữ định dạng CSS

## Cách viết CSS trong trang HTML

Cách 1: Viết trực tiếp CSS trong trang html thông qua thẻ style (Internal CSS)

```
<style>
    Code CSS
</style>
```

Cách 2: Tách riêng file .css và gọi vào file html thông qua thẻ link (External)

```
<link href="duong-dan-file-css" rel="stylesheet" />
```

Cách 3: Viết thuộc tính css trực tiếp trong thẻ html thông qua thuộc tính style (Inline CSS)

## Cấu trúc của CSS

```
selector {
    thuoctinh1: giatri1;
    thuoctinh2: giatri2;
}
```

## Selector

1. Selector cơ bản

- id --> #tenid
- class --> .tenclass
- tagname --> tagname

2. Selector kết hợp

2.1. Nằm trong

selector1 selector2 selector3

2.1. Cha con

selector1 > selector2 > selector 3

2.3. Cùng cấp

selector1selector2selector3

2.4. Kế thừa

selector1, selector2, selector3

2.5. Nằm sau

selector1 ~ selector2 ~ selector3

Điều kiện

- Ngang hàng
- Cùng thuộc 1 cha

  2.6. Nằm sau liền kề

selector1 + selector2 + selector3

2.7. Attribute Selector

tagname[tenthuoctinh] --> Chọn thẻ có thuộc tính nào đó

tagname[tenthuoctinh="giatri"] --> Chọn thẻ có thuộc tính = giá trị

tagname[tenthuoctinh^="giatri"] --> Chọn thẻ có thuộc tính bắt đầu chứa giá trị nào đó

tagname[tenthuoctinh*="giatri"] --> Chọn thẻ có thuộc tính chứa giá trị (Không quan tâm đến vị trí)

tagname[tenthuoctinh$="giatri"] --> Chọn thẻ có thuộc tính kết thúc chứa giá trị nào đó

tagname[tenthuoctinh~="giatri"] --> Chọn thẻ có thuộc tính chứa từ giá trị

2.8. Chọn tất cả element

```
* {
    code css
}
```

## Pseudo

1. Phần tử giả (Pseudo Element)

- before, after
  => Tạo ra 1 element ở phía trước, sau element đang tác động
  => Yêu cầu bắt buộc: Phải có thuộc tính content
- first-line
- first-letter
- placeholder
- selection

2. Lớp giả (Pseudo Class)

- hover --> Trỏ chuột vào element
- active --> Click và giữ chuột
- focus --> Áp dụng trong form (Xem ví dụ)
- checked --> Khi checkbox hoặc radio được check
- disabled --> Trường trong form bị vô hiệu hóa (Tồn tại thuộc tính disabled)
- not --> Loại trừ selector nào đó
- first-child --> Chọn phần tử con đầu tiên
- last-child --> Chọn phần tử con cuối cùng
- first-of-type --> Chọn phần tử đầu tiên cùng kiểu thẻ
- last-of-type --> Chọn phần tử cuối cùng cùng kiểu thẻ
- nth-child(stt) --> Chọn phần tử theo số thứ tự
- nth-of-type(stt) --> Chọn phần tử cùng kiểu theo số thứ tự
- valid --> Áp dụng với form, khi mà trường có dữ liệu

## Các thuộc tính định dạng văn bản

1. Thuộc tính color

- Thay đổi màu của văn bản
- Cú pháp: color: mamau|tenmau|transparent

2 giá trị có trong tất cả các thuộc tính css

- interit --> Kế thừa từ cha
- initial --> Kế thừa từ mặc định trình duyệt

2. Thuộc tính font-size

- Thay đổi cỡ chữ của văn bản
- Cú pháp: font-size: giatri + donvi

Đơn vị thường sử dụng trong font-size:

- px --> Đơn vị tuyệt đối
- em --> Tương đối, tỷ lệ theo font-size của cha
- rem --> Tương đối, tỷ lệ theo font-size mặc định của trình duyệt (Có thể thay đổi được bằng selector html)

3. Thuộc tính line-height

- Thay đổi độ cao của dòng (Giãn dòng)
- Cú pháp: line-height: value (Tỷ lệ với font-size của chính nó)

4. Thuộc tính font-family

- Thay đổi font chữ
- Cú pháp: font-family: tenfont1, tenfont2, ...
  Lưu ý:
- Nếu tên font có khoảng trắng --> Để trong cặp dấu ""
- Thứ tự chạy font chữ: từ trái sang phải và chỉ chạy sang font tiếp theo khi font hiện tại bị lỗi hoặc không tải được

5. Thuộc tính text-decoration

- Tạo đường gạch chân, gạch ngang, gạch trên
- Cú pháp: text-decoration: none|underline|overline|line-through

6. Thuộc tính text-transform

- Tạo văn bản chữ hoa, chữ thường
- text-transform: none|uppercase|lowercase|capitalize

7. Thuộc tính letter-spacing

- Tạo khoảng cách giữa các ký tự
- letter-spacing: giatri + donvi

8. Thuộc tính word-spacing

- Tạo khoảng cách giữa các từ
- word-spacing: giatri + donvi

9. Thuộc tính text-align

- Thay đổi vị trí của văn bản theo chiều ngang
- text-align: left|center|right|justify

Lưu ý:

- Các thẻ inline trong html đều có thể sử dụng thuộc tính này để căn chỉnh (img, button, span, input)
- Chỉ căn được text-align ở thẻ block

10. Thuộc tính word-wrap

- wrap văn bản nếu bị tràn theo chiều ngang
- word-wrap: normal|break-word

11. Thuộc tính text-indent

- Thụt đầu dòng 1 khoảng chỉ định
- text-index: giatri + donvi

## Thuộc tính background

1. background-color

- Thay đổi màu nền của phần tử html
- background-color: mamau|tenmau

2. background-image

- Thay đổi hình nền của phần tử html
- background-image: url(link-anh)

3. background-repeat

- Thay đổi chế độ lặp của ảnh nền
- background-repeat: repeat|no-repeat|repeat-x|repeat-y

4. background-position

- Thay đổi vị trí của background
- background-position: x y
  Mặc định: x = 0, y = 0

Các giá trị thay thế

x = 0 --> left
x = 50% --> center
x = 100% --> right

y = 0 --> top
y = 50% --> center
y = 100% --> bottom

5. background-size

- Thiết lập kích thước của hình nền
- background-size: x y

Giá trị đặc biệt

- cover: Lấp đầy khung hiển thị
- contain: Giữ nguyên tỷ lệ gốc của ảnh nền

6. background-attachment

- Cố định ảnh nền khi kéo thanh cuộc
- background-attachment: scroll|fixed

7. background

- Gộp tất cả các trường hợp trên
- background: color image repeat position / size attachment

## Thuộc tính border

- Tạo đường viền cho phần tử html
- Cấu tạo border = width + style + color

1. border-width: Thiết lập độ dày của viền

- border-width: giatri + donvi

2. border-style: Thiết lập kiều viền

- border-style: none|solid|dashed|dotted|double

3. border-color: Thiết lập màu của viền

- border-color: mau

Cú pháp mở rộng của 3 thuộc tính trên

Công thức:

- border-{side}-width
- border-{side}-style
- border-{side}-color

side: top, left, right, bottom

Thuộc tính viết tắt

Cú pháp:

- border: width style color
- border-{side}: width style color

## Padding

- Thành phần đệm trong border
- Nếu thẻ html là inline, không thiết lập padding top và bottom

Cú pháp:

padding: value
padding: value1 value2
padding: value1 value2 value3
padding: value1 value2 value3 value4

4 thuộc tính mở rộng

- padding-top
- padding-left
- padding-right
- padding-bottom

padding không có giá trị âm

padding với đơn vị % --> Tỷ lệ theo width theo thẻ cha

## Margin

## Display

- Thay đổi chế độ hiển thị của thẻ html
- display: none | inline | block | inline-block

Giá trị phức tạp:

- flex
- inline-flex
- grid
- inline-grid
- list-item
- table

## Flex (Flexible Box Module)

- Kỹ thuật chia layout linh hoạt
- 2 phần

* Flex container --> Thẻ bọc
* Flex item

1. Các thuộc tính trong nhóm container

- display: flex | inline-flex --> Kích hoạt flexbox
- flex-direction: Chọn hướng cho trục main (Mặc định nằm ngang)

* row --> Mặc định
* row-reverse --> Hàng đảo ngược
* column --> Dọc
* column-reverse --> Dọc đảo ngược

- justify-content: Điều khiển các item theo hướng song song với trục main

* flex-start
* center
* flex-end
* space-around
* space-between
* space-evenly

- align-items: Điều khiển các item theo hướng song song với trục cross

* stretch --> mặc định, kéo dãn các item theo trục cross
* flex-start --> Nằm ở vị trí start của trục cross
* center --> Nằm ở giữa
* flex-end --> Nằm vị trí end
* baseline --> Căn theo đường baseline

- flex-wrap: Wrap item khi vượt quá container

* nowrap
* wrap
* wrap-reverse

- gap: Căn chỉnh khoảng cách giữa các item
- row-gap: Căn theo hàng
- column-gap: Căn theo cột

2. Các thuộc tính trong nhóm item

- flex-grow: number ==> Lấp đầy các khoảng cách còn trống của container

- flex-shrink: number ==> Tự động co lại khi số tổng kích thước các item > container

- flex-basis: number + unit ==> Thiết lập kích thước chiều rộng, cao cho item

- flex: grow shrink basis

- order: Sắp xếp thứ tự các item

## Transtion

- Thuộc tính giúp thiết lập hiệu ứng di chuyển của các thuộc tính css
- Áp dụng các thuộc tính có giá trị là số: color, background, padding, margin, width, height...

1. Thuộc tính transition-property

Chọn thuộc tính css có hiệu ứng di chuyển

- all --> Chọn tất cả
- tenthuoctinh

Lưu ý: Mỗi thuộc tính cách nhau bởi dấu ,

Ví dụ: transition-property: width, padding-left

2. Thuộc tính transition-duration

Thiết lập thời gian hoàn thành chuyển động (s, ms)

Ví dụ: transition-duration: 1s

3. Thuộc tính transition-delay

Thiết lập thời gian trễ trước khi hiệu ứng di chuyển (s, ms)

4. Thuộc tính transition-timing-function

Thiết lập tốc độ di chuyển

- ease: Chậm - Nhanh - Chậm
- ease-in: Chậm - Nhanh
- ease-out: Nhanh - chậm
- ease-in-out: Chậm - Nhanh - Chậm
- linear: Đều
- cubic-bezier(p1,p2,p3,p4)

5. Thuộc tính transtion

transition: property duration delay timing

## Transform

Thay đổi hình dạng ban đầu của phần tử html

- Xoay
- Nghiêng
- Phóng to, thu nhỏ
- Di chuyển

Cú pháp: transform: value

- rotate(angle) --> Xoay phần tử theo trục Z
- rotateX(angle) --> Xoay phần tử theo trục X
- rotateY(angle) --> Xoay phần tử theo trục Y

Lưu ý: rotate có thể viết dưới dạng rotate: angle

- scale(x, y) --> Phóng to hoặc thu nhỏ theo trục x, y
- scaleX(value) --> Phóng to theo trục X
- scaleY(value) --> Phóng to theo trục Y

Lưu ý: scale có thể viết dưới dạng scale: x y

- skew(x, y) --> Nghiêng theo trục x, y
- skewX(value) --> Nghiêng theo trục X
- skewY(value) --> Nghiêng theo trục Y

- translate(x, y) --> Di chuyển phần tử theo trục X, Y (Không làm thay đổi bố cục ban đầu)
- translateX(value) --> Di chuyển theo trục X
- translateY(value) --> Di chuyển theo trục Y

Lưu ý:

- Nếu đơn vị là % --> Tỷ lệ với chính nó
- Tách thuộc tính riêng

translate: x y

Thuộc tính transform-origin: x y --> Chọn vị trí trục (Mặc định: 50% 50%)

## Animation

- Tạo ra các hiệu ứng phức tạp và liên tục
- Dựa theo kịch bản được thiết lập sẵn (@keyframes)
- 2 bước

* Xây dựng @keyframes
* Sử dụng keyframes (Thông qua thuộc tính animation)

Cú pháp keyframes

```css
@keyframes ten-keyframe {
  from {
    thuoctinh: giatri;
  }
  p2 {
    thuoctinh: giatri;
  }
  p3 {
    thuoctinh: giatri;
  }
  to {
    thuoctinh: giatri;
  }
}
```

- from: 0%
- to: 100%

Ví dụ: Hoàn thành chuyển động trong 1s, chia thành 4 phần

```css
@keyframes move {
  from {
    top: 0;
    left: 0;
  }
  25% {
    top: 0;
    left: 25%;
  }
  50% {
    top: 0;
    left: 50%;
  }
  75% {
    top: 0;
    left: 75%;
  }
  to {
    top: 0;
    left: 100%;
  }
}
```

Các thuộc tính của animation

- animation-name: tenkeyframe
- animation-duration: Thời gian hoàn thành (s, ms)
- animation-delay: Thời gian trễ (s, ms)
- animation-timing-function: Thiết lập tốc độ (Giống transition)
- animation-interation-count: Số lần lặp lại hiệu ứng (infinite = Liên tục)
- animation: name duration delay timing count
