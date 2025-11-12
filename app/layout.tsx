import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/lib/redux/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: "Trackly",
  description: "Discover music and albums",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.variable}>
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
