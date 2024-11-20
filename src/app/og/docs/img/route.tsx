import { DocsTemplate } from '../Docs'

import { ImageResponse } from 'next/og'
import { NextRequest, NextResponse } from 'next/server'
// import * as crypto from 'crypto';
// import crypto from 'crypto';


// Route segment config
export const runtime = 'edge'

// Image generation
export async function GET(request: NextRequest) {

  const fontData = await fetch(
    new URL('@/styles/Figtree.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  // Extract query parameters
  const params = request.nextUrl.searchParams;
  const title = params.get('title') || '';
  // console.log('Title:', title);
  const token = params.get('token');
  // console.log('Received Token:', token);
  const secret = process.env.DYNAMIC_OG_SECRET as string;
  // console.log('Secret:', secret);

  // Validate the token
  if (!token || !title) {
    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
  }

  // Web Crypto API for HMAC validation
  // async function validateToken(title:string, secret:string, providedToken:string) {
  //   // Step 1: Encode the secret key and the title
  //   const encoder = new TextEncoder();

  //   // Import the secret key into a crypto key object
  //   const key = await crypto.subtle.importKey(
  //     'raw',
  //     encoder.encode(secret), // encoding secret
  //     { name: 'HMAC', hash: 'SHA-256' }, // HMAC with SHA-256
  //     false,
  //     ['sign'] // only allowing the key to sign (create HMAC)
  //   );

  //   // Encode the title (this is the data you want to hash)
  //   const dataTitle = encoder.encode('IdeaHatch');

  //   // Step 2: Sign the data with the secret key to generate the HMAC
  //   const signature = await crypto.subtle.sign('HMAC', key, dataTitle);

  //   // Step 3: Convert the signature into a hexadecimal string (for comparison)
  //   const expectedToken = Array.from(new Uint8Array(signature))
  //     .map((b) => b.toString(16).padStart(2, '0')) // converting bytes to hex
  //     .join(''); // joining all hex digits together

  //   // Log for debugging
  //   // console.log('Expected Token:', expectedToken);
  //   // console.log('Provided Token:', providedToken);

  //   // Step 4: Compare the generated expected token with the provided token
  //   return expectedToken === providedToken; // Return true if the tokens match
  // }

  // const isValid = await validateToken(title, secret, token);

  // if (!isValid) {
  //   return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 });
  // }

  const template = {
    title: params.get('title') || 'Be part of a growing community of creative minds. Share ideas, collaborate, and shape the future with IdeaHatch!',
    sub: params.get('sub') || '',
    name: params.get('name') || 'IdeaHatch - Where Ideas Take Flight',
    logo: params.get('logo') || process.env.NEXT_PUBLIC_DOMAIN as string + '/fillers/Icon.png',
    dark: params.get('dark') == 'true',
    website: params.get('website') || ''
  }

  // console.log("🔥 ~ GET ~ template:", template)

  return new ImageResponse(
    (
      <DocsTemplate t={template} />
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Figtree',
          data: fontData,
          style: 'normal',
          weight: 900
        },
      ],
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  )
}