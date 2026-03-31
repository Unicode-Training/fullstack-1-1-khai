import { useEffect, useState } from "react";

export default function App() {
  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const handleChangeImage = (e) => {
    setImageFile(e.target.files[0]);
    const previewUrl = URL.createObjectURL(e.target.files[0]);
    setImagePreview(previewUrl);
  };
  const handleUpload = async () => {
    if (!imageFile) {
      //Lưu vào state để thông báo lỗi
      setMessage("Vui lòng chọn file");
      return;
    }
    const formData = new FormData();
    formData.append("file", imageFile);
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/files/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      const data = await response.json();
      setMessage("Upload thành công");
      setImagePreview(data.location);
    } catch {
      setMessage("Upload thất bại. Vui lòng thử lại sau");
      setImagePreview("");
    }

    setLoading(false);
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);
  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleChangeImage} />
      <button disabled={isLoading} onClick={handleUpload}>
        {isLoading ? "Uploading..." : "Upload"}
      </button>
      {message && <p style={{ color: "green" }}>{message}</p>}
      <div>{imagePreview && <img src={imagePreview} width={300} />}</div>
    </div>
  );
}
