export function GET() {

    const content = `User-agent: *
Sitemap: /sitemap.xml`

    return new Response(content, {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    });
}