import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ThemeScript from "./components/themeScript";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Agastya Rajawat",
  description:
    "Agastya Rajawat — backend, frontend, and mobile developer based in Jaipur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tpf38v9i3q");`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
