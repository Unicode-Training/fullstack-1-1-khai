# CORS

## Tổng quan

- Chính sách của trình duyệt
- Ngăn chặn việc truy cập trái phép

## 2 loại request

1. Simple request

- Request vẫn được gửi lên server, server vẫn phải về response
- Khi về trình duyệt sẽ bị chặn không truy cập vào response

2. Non-simple request

- Trình duyệt sẽ gửi trước 1 request thăm dò (Preflight) với url giống như request đang muốn gửi, method là Options
- Trình duyệt sẽ kiểm tra phản hồi của Preflight, có header mà nó mong muốn => Gửi request chính lên. Ngược lại, chặn luôn request từ phía trình duyệt
