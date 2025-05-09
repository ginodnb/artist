export function GET() {

    return new Response('xmlContent', {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
        },
    });
}