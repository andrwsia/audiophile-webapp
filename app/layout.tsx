import type { Metadata } from "next";
import '@/styles/main.scss';
import { manrope } from '@/app/ui/shared/elements/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}