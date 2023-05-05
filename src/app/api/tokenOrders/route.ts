import { API_BASE_URL } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
const orderApiCall = async (token: any) => {
  try {
    const res = await fetch(`${API_BASE_URL}/orders/`, {
      method: "GET",
      headers: { Authorization: token },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(await res.json());
    }
    return res.json();
  } catch (error) {
    return error;
  }
};

export async function GET(request: NextRequest) {
  const token = request.headers.get("Authorization");
  try {
    const result = await orderApiCall(token);
    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 404 });
  }
}