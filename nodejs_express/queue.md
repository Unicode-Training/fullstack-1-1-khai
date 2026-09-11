# Queue

- Giải quyết các tác vụ nặng mà không làm nghẽn luồng chính (HTTP Request, HTTP Response)
- Bản chất: Đẩy công việc nặng sang 1 luồng khác

Lưu ý:

- Nếu job ít, hoặc thời gian thực hiện job nhanh -> Không tăng worker

## Lập lịch add job vào queue

- Xây dựng các tính tự động hóa
