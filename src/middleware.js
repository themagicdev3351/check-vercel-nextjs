import { NextResponse } from "next/server";

export function middleware(req) {
    const token = req.cookies.get("token")?.value;

    const publicPaths = ["/signin", "/signup"];
    const isPublic = publicPaths.some((path) => req.nextUrl.pathname.startsWith(path));

    const isStaticAsset = req.nextUrl.pathname.startsWith("/_next/") || req.nextUrl.pathname.startsWith("/static/") || req.nextUrl.pathname.startsWith("/favicon.ico");

    if (req.nextUrl.pathname.startsWith("/")) {
        return NextResponse.next();
    }

    if (isStaticAsset) {
        return NextResponse.next();
    }

    if (!token && !isPublic) {
        return NextResponse.redirect(new URL("/signin", req.url));
    }

    return NextResponse.next();
}
