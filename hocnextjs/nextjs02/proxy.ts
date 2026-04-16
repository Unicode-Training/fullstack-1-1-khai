import { NextRequest, NextResponse } from "next/server";
import {
  getCurrentUser,
  makeRefreshToken,
} from "./app/(main)/_actions/auth.action";

export const proxy = async (request: NextRequest) => {
  const user = await getCurrentUser();
  if (!user) {
    //Xử lý refresh token
    const refreshStatus = await makeRefreshToken();
    if (!refreshStatus) {
      return NextResponse.redirect(
        new URL("/auth/login", request.nextUrl.origin),
      );
    } else {
      const accessToken = refreshStatus.newAccessToken;
      const headers = new Headers(request.headers);
      headers.set(`x-token`, accessToken);
      return NextResponse.next({
        request: {
          headers,
        },
      }); //Trả về response
    }
  }
};

export const config = {
  matcher: ["/cart/:path*"],
};
