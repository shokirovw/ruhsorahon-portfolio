import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
export async function GET(request) {
  let key = request.nextUrl.searchParams.get('key');
  if (key && key == "uzb007") {
    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path)
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } else {
    return NextResponse.json({ revalidated: false })
  }
  
}