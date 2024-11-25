import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Olivia Bar",
  description: "Restuarent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mb-24"><Header /></div>
        {children}
        <div className="mt-10"><Footer /></div>
      </body>
    </html>
  );
}
