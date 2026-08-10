"use client";

import { useEffect } from "react";

const routeMap: Record<string, string> = {
  "#home": "/",
  "#about-us": "/about/",
  "#our-fleet": "/fleet/",
  "#pricing": "/pricing/",
  "#how-it-works": "/how-it-works/",
  "#blog": "/blog/",
  "#contact": "/contact/",
  "#book": "/book/",
};

export default function NavigationBridge() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !routeMap[href]) return;

      event.preventDefault();
      const base = window.location.pathname.startsWith("/allino-mobility") ? "/allino-mobility" : "";
      window.location.assign(`${base}${routeMap[href]}`);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
