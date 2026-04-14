import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./app/(main)/_actions/auth.action";

export const proxy = async (request: NextRequest) => {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.redirect(
      new URL("/auth/login", request.nextUrl.origin),
    );
  }
};

export const config = {
  matcher: ["/cart/:path*"],
};
