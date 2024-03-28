import type { Metadata } from "next";
import '@/styles/main.scss';
import { manrope } from '@/components/shared/elements/fonts';
import Header from "../components/shared/header/header";
import Footer from "@/components/shared/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}