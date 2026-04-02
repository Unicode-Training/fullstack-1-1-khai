//Tên hàm tương ứng với tên của các http method
//GET, POST, PUT, PATCH, DELETE

import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// export const GET = (request: NextRequest) => {
//   const s = request.nextUrl.searchParams.get("s");
//   const id = request.nextUrl.searchParams.get("id");
//   console.log(`id`, id);
//   console.log(`s`, s);

//   return NextResponse.json({
//     message: "Success",
//   });
// };

// export const POST = async (request: NextRequest) => {
//   const body = await request.json();
//   console.log(body);
//   return NextResponse.json({
//     message: "POST success",
//   });
// };

//Xóa cache
export const DELETE = async (request: NextRequest) => {
  const { path } = await request.json();
  if (!path) {
    return NextResponse.json(
      {
        message: "Path is required",
      },
      {
        status: 400,
      },
    );
  }
  revalidatePath(path);
  return NextResponse.json({
    message: "Clear cache success",
  });
};
