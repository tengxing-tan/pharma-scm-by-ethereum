// The most simple usage is when you want to require authentication for your entire site.
// You can add a middleware.js file with the following:
export { default } from "next-auth/middleware"

// If you only want to secure certain pages, export a config object with a matcher:
// export const config = { matcher: ["/admin", "/product-catalogue", "/order"] }
