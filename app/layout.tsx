import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/Provider";
import { Appbar } from "@/components/Appbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solert: A Solana Tracker App",
  description: "Created by Priyanshu & Nawab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <Appbar/>
          {children}
          <Footer/>
        </body>
      </Provider>
    </html>
  );
}
