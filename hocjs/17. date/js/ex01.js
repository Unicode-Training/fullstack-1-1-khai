//Date là object của js dùng để xử lý thời gian
// - Date lấy thời gian ở máy tính người dùng
// - Nếu chạy trên server, Date lấy thời gian ở Server

console.log(Date.prototype);

// const today = new Date(); //Lấy thời gian hiện tại
// console.log(today);

//Các phương thức
// console.log(today.getDay()); //Trả về thứ
// console.log(today.getDate()); //Trả về ngày
// console.log(today.getMonth()); //Trả về tháng
// console.log(today.getFullYear()); //Trả về năm

// console.log(today.getHours()); //Trả về giờ
// console.log(today.getMinutes()); //Trả về phút
// console.log(today.getSeconds()); //Trả về giây
// console.log(today.getMilliseconds()); //Trả về mili giây

// console.log(today.getTime()); //Trả về timestamp (mili giây): Số giây từ 1970

//Tạo đối tượng thời gian từ 1 thời điểm bất kỳ
//Lưu ý: Có thể đưa timestamp vào đối tượng Date
// const targetDate = "2025-07-02 09:30:45";
// const date = new Date(targetDate);
// console.log(date);

//Bài tập: Chuyển đổi định dạng
// const targetDate = "2025-07-02 09:30:45";
// //Output: Ngày 02 tháng 07 năm 2025, 09 giờ 30 phút 45 giây
// const date = new Date(targetDate);
// const output = `Ngày ${date.getDate()} tháng ${
//   date.getMonth() + 1
// } năm ${date.getFullYear()}, ${date.getHours()} giờ ${date.getMinutes()} phút ${date.getSeconds()} giây`;
// console.log(output);

//Bài tập
const expireDate = "2025-07-03 09:30:45";
// setInterval(() => {
//   console.log("Học js không khó");
// }, 1000);

const handleCountdown = () => {
  let diff = (new Date(expireDate).getTime() - new Date().getTime()) / 1000;

  const days = Math.floor(diff / 86400);
  diff -= days * 86400;

  const hours = Math.floor(diff / 3600);
  diff -= hours * 3600;

  const mins = Math.floor(diff / 60);
  diff -= mins * 60;

  const seconds = Math.floor(diff);

  document.querySelector(".day").innerHTML = days;
  document.querySelector(".hour").innerHTML = hours;
  document.querySelector(".min").innerHTML = mins;
  document.querySelector(".second").innerHTML = seconds;
};
setInterval(handleCountdown, 1000);
