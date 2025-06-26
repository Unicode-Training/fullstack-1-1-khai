//1. Lấy thông tin file
//2. Hiển thị xem trước (Nếu cần) --> Lưu thông tin file vào trong bộ nhớ Blob
//3. Gửi file lên back-end thông qua API

const imageEl = document.querySelector(".image");
const imgPreviewEl = document.querySelector(".img-preview");
let prevUrl = null;
const img = document.createElement("img");
imageEl.addEventListener("change", () => {
  const file = imageEl.files[0];
  const urlPreview = URL.createObjectURL(file);
  URL.revokeObjectURL(prevUrl);
  img.src = urlPreview;
  imgPreviewEl.innerText = "";
  imgPreviewEl.append(img);
  prevUrl = urlPreview;
});

const btn = document.querySelector(".btn");
const loadingEl = document.querySelector(".loading");
btn.addEventListener("click", async () => {
  const formData = new FormData();
  formData.append("file", imageEl.files[0]);
  //Loading
  loadingEl.innerText = "Uploading...";
  btn.disabled = true;
  const response = await fetch("https://api.escuelajs.co/api/v1/files/upload", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  //Success
  loadingEl.innerText = "Upload Success";
  btn.disabled = false;
  img.src = data.location;
});
