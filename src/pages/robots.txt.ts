export function GET() {

    const content = `User-agent: *
Allow /
Sitemap: https://www.ginodnb.com/sitemap-index.xml`

    return new Response(content, {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    });
}