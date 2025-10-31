import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello There", { status: 200 });
    } else if (url.pathname === "/Welcome") {
      return new Response("Thanks for Visiting Here", { status: 200 });
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },
  port: 7000,
  hostname: "127.0.0.1",
});
