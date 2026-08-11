import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/allino-mobility" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // GitHub Pages project-site path. Next.js automatically applies basePath
  // to routes and its generated static assets, so assetPrefix is intentionally
  // omitted to avoid broken /_next CSS/JS URLs on nested pages.
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
