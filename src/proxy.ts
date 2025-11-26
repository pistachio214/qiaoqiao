import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    // 检查用户代理判断设备类型
    const headers = request.headers;

    return NextResponse.next()
}

export const config = {
    // matcher: '/about/:path*',
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}