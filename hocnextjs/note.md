# NextJS

- Page: Mỗi 1 route tương ứng với 1 page
- Layout: 1 layout có thể tương ứng với nhiều route

* Root Layout: Tạo ra bố cục html ban đầu
* Custom Layout: Layout riêng cho từng nhóm route (admin, user, client)

Khi truy cập vào 1 route --> Đi qua layout --> Đến page

## Cơ chế Routing: Dựa vào hệ thống tệp (file system)

- ten-folder/page.tsx --> /ten-folder
- ten-folder/sub-folder/page.tsx --> /ten-folder/sub-folder
- page.tsx --> /
- ten-folder/[id]/page.tsx --> /ten-folder/gia-tri-bat-ky ==> Dynamic Route
- ten-folder/[...id]/page.tsx --> /ten-folder/cap1/cap2/....

## Server component, client component

Mặc định sẽ là server component:

- page, layout, component thông thường
- Nếu component cha là server thì component cũng là server
- Không dùng được: event, state, react hook, api browser,...
