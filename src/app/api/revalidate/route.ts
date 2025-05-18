// app/api/revalidate/route.ts
import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get('path');
  
  
  if (!path) {
    return new Response('Path is required', { status: 400 });
  }

  try {
    revalidatePath(path); 
    return new Response(`Revalidated ${path}`, { status: 200 });
  } catch (err) {
    return new Response(`Failed to revalidate: ${err}`, { status: 500 });
  }
}
