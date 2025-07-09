# Package Manager

- Công cụ giúp quản lý các thư viện của 1 ngôn ngữ lập trình nào đó
- JS: npm, yarn, pnpm,...
- PHP: composer

Tác dụng:

- Dễ dàng làm việc với các thư viện
- Tải, cập nhật, xóa bỏ,...
- Làm việc thông qua CLI

Cần thông qua file cấu hình

## Khởi tạo dự án

npm init -y

## Cách cài 1 thư viện

- Simple Dependencies: Thư viện dùng để chạy dự án (Phải có nó thì dự án mới chạy đươc)

npm i tenthuvien@phienban

- Dev Dependencies (Các thư viện hỗ trợ trong quá trình dev)

npm i tenthuvien@phienban --save-dev

## Cài đặt tất cả dependencies từ package.json và package-lock.json

Cài đặt tất cả
npm i

Chỉ cài đặt simple dependencies

npm i --product

## Loại cài đặt

- Dependencies Local --> Thêm vào folder node_modules trong dự án

  npm i tenthuvien@phienban

- Dependencies Global --> Thêm vào folder node_modules của server

npm i tenthuvien@phienban -g

## Phiên bản dependencies

## Lệnh update

npm update tenthuvien@phienban

npm update --> Update tất cả

## Sự khác giữa package.json và package-lock.json

Khi chưa có package-lock.json --> Chạy npm i --> Tải các thư viện trong file package.json phù hợp với phiên bản đã khai báo (Giữ số đầu tiên của phiên bản)

Sau khi cài đặt xong --> npm tự động tạo ra file package-lock.json để khóa phiên bản đã cài

Lần sau chạy npm i --> Lấy theo package-lock.json --> Tránh sai lệch phiên bản

Ngoại lệ:

Nếu dùng npm update --> Không đọc trong package-lock.json

## Xóa dependencies

npm uninstall tenthuvien
