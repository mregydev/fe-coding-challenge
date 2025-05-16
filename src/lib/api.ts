
const defaultHeaders = {
  token: process.env.WTTR_API_TOKEN!,
  'X-Application-ID': process.env.WTTR_APP_ID!,
};

/**
 * 
 * @param path 
 * @param revalidate 
 * @returns API Json response
 */
export async function apiFetch<T>(path: string, revalidate?: number): Promise<T> {
  const res = await fetch(`${process.env.WTTR_BASE_URL}${path}`, {
    headers: defaultHeaders,
    next: revalidate ? { revalidate } : undefined,
    cache: revalidate ? undefined : 'force-cache',
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
