import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook';
 
export async function POST(req) {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME].toString();
    if (
      !isValidSignature(
        JSON.stringify(req.body),
        signature,
        process.env.SANITY_WEBHOOK_SECRET
      )
    ) return res.status(401).json({ msg: 'Invalid request!' });
    
    const { url_slug } = req.body;
  
    revalidatePath(`/`);
    revalidatePath(`/blog/${url_slug}`);
    
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    return NextResponse.json({ revalidated: false })
  }
}