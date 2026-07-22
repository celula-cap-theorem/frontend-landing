import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "ct_token";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const expires = request.nextUrl.searchParams.get("expires");

  if (!token || !expires) {
    return NextResponse.redirect(new URL("/login?error=missing_token", request.url));
  }

  const expiresAt = new Date(expires);
  if (Number.isNaN(expiresAt.getTime())) {
    return NextResponse.redirect(new URL("/login?error=invalid_token", request.url));
  }

  const response = NextResponse.redirect(new URL("/dashboard", request.url));
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
  return response;
}
