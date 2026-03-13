import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// TODO: Re-enable secret check after debugging
export async function POST(req: NextRequest) {
  const headers = Object.fromEntries(req.headers.entries());
  let body: any = null;
  try {
    body = await req.json();
  } catch {
    body = null;
  }

  console.log("[revalidate] Incoming request:");
  console.log("[revalidate] Headers:", JSON.stringify(headers, null, 2));
  console.log("[revalidate] Body:", JSON.stringify(body, null, 2));

  const paths = [
    "/",
    "/makers",
    "/makers/[slug]",
    "/shop",
    "/shop/[slug]",
  ];

  try {
    for (const path of paths) {
      const type = path.includes("[slug]") ? "page" as const : "layout" as const;
      revalidatePath(path, type);
    }

    const response = {
      revalidated: true,
      paths,
      timestamp: new Date().toISOString(),
    };

    console.log("[revalidate] Success:", JSON.stringify(response));
    return NextResponse.json(response);
  } catch (err: any) {
    console.error("[revalidate] Error:", err.message);
    return NextResponse.json({ message: "Revalidation failed", error: err.message }, { status: 500 });
  }
}
