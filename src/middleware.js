import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
  const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET || "secret"});
  const url = req.nextUrl.clone();

  if(token && url.pathname.startsWith("/login")){
    url.pathname = "/";
    return NextResponse.redirect(url);
  };

  if(!token && url.pathname.startsWith("/dashboard")){
    url.pathname = "/login";
    return NextResponse.redirect(url);
  };

  return NextResponse.next();
};


export const config = {
  matcher:[
    '/dashboard/:path*', // /dashboard/profile  dashboard/settings dashboard/post
    '/login/:path*',
  ]
};