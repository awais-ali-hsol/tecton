"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    // Leave links like /#services to the router, which scrolls to the section.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);

  // A link to the current page changes no pathname, so the effect above never runs.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (link?.origin !== location.origin || link.pathname !== location.pathname) return;
      if (link.hash) document.getElementById(link.hash.slice(1))?.scrollIntoView();
      else window.scrollTo(0, 0);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
