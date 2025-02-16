export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "URL is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const contentType = response.headers.get("content-type");

    return new Response(await response.text(), {
      status: response.status,
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch the URL" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
