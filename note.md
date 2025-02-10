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