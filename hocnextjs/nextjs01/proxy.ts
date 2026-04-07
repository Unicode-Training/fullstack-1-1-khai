import { NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  //   console.log(request.nextUrl);
  const token = request.cookies.get("token")?.value;
  //   if (token !== "123") {
  //     return NextResponse.redirect(
  //       new URL("/auth/login", request.nextUrl.origin),
  //     );
  //   }
  const headers = new Headers(request.headers); //Lấy hết request header từ trình duyệt gửi lên
  headers.set("x-auth", token ? "true" : "false"); //Thêm 1 header mới vào request
  //Gán vào response để đi tiếp
  const response = NextResponse.next({
    request: {
      headers,
    },
  });
  return response;
};

export const config = {
  matcher: ["/posts/:path*"],
};

//Mặc định tất cả request sẽ đi qua proxy, bao gồm:
// - Fetch request
// - css, image, js,...

//Proxy có thể làm gì?

//- Kiểm tra các thông tin http request: cookie, header, url,...
//- Thay đổi response header, request header
