import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer, Header, PreviewBar } from "@/components/chrome";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renaissance-homes-preview.netlify.app"),
  title: "Renaissance Homes · Lake Oswego custom luxury (preview)",
  description:
    "Preview studio for Renaissance Homes, a Lake Oswego custom builder since 1984. Not live on renaissance-homes.com.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <div className="grain" aria-hidden />
        <PreviewBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
