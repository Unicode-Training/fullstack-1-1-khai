export const debounce = <T>(func: (...args: T[]) => void, timeout = 500) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: T[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

//Nguyên tắc: Xóa timeout trước khi timeout kịp chạy, đến từ cuối cùng timeout sẽ chạy

//r --> setTimeout 1 --> chờ 500ms
//re --> setTimeout 2 --> chờ 500ms
//red --> setTimeout 3 --> chờ 500ms
