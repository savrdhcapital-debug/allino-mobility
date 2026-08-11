import type { Metadata } from "next";
import "./globals.css";
import "./hero.css";
import "./responsive.css";
import "./tailwind.css";
import NavigationBridge from "./NavigationBridge";

export const metadata: Metadata = {
  title: "Allino — Self-Drive Mobility",
  description: "Self-drive cars and self-ride bikes in Bhopal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><NavigationBridge />{children}</body></html>;
}
