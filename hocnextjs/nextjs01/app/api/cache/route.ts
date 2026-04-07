//Tên hàm tương ứng với tên của các http method
//GET, POST, PUT, PATCH, DELETE

import { revalidatePath, revalidateTag } from "next/cache";
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
  const { value, type } = await request.json(); //type: path, tag
  if (!value || !type) {
    return NextResponse.json(
      {
        message: "Value and type is required",
      },
      {
        status: 400,
      },
    );
  }
  if (type === "path") {
    revalidatePath(value);
  }
  if (type === "tag") {
    revalidateTag(value, {
      expire: 0, //Xóa ngay lập tức
    });
  }

  return NextResponse.json({
    message: "Clear cache success",
  });
};
