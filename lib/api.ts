const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5112";

export class ApiError extends Error {
  constructor(public status: number, path: string) {
    super(`API request to ${path} failed with status ${status}`);
  }
}

export async function apiFetch<T>(
  path: string,
  token?: string,
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new ApiError(res.status, path);
  }

  return res.json() as Promise<T>;
}
