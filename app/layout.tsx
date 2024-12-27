import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from 'next/font/google'
import "./globals.css";
import WebSocketInitializer from './WebSocketInitializer';
import SessionWrapper from "@/components/SessionWrapper";

 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "slatechat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={`${roboto.className}`}>
          <WebSocketInitializer />
          {children}
      </body>
    </html>
    </SessionWrapper>
  );
}