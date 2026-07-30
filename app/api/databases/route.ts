import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5112";
const COOKIE_NAME = "ct_token";

export async function POST(request: Request) {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body.name !== "string" || typeof body.region !== "string") {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const res = await fetch(`${API_URL}/api/databases`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: body.name, region: body.region }),
  });

  const data = await res.json().catch(() => null);
  return NextResponse.json(data, { status: res.status });
}
