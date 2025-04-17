import { Metadata } from 'next';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';
import AuraEffect from '@/components/interactive/AuraEffect';
import StarCanvas from '@/components/interactive/StarCanvas';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Colin Lewandowski | Portfolio',
  description: 'Personal portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ThemeProvider>
          {children}
          <StarCanvas/>
          <AuraEffect/>
        </ThemeProvider>
      </body>
    </html>
  );
}
