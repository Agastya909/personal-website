import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agastya's Page 📄",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
