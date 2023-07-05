import Navbar from "@/app/(shared)/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "./(shared)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Auto-filled Content Blog",
  description: "Blog built in Next JS that uses ChatGPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
