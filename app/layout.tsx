import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://hemant5harma.tech"),
  title: "Hemant Sharma",
  description: "I specialize in developing full-stack applications with blockchain integration, combining modern web technologies and DevOps practices",
  keywords: ["hemant5harma", "hemant sharma", "web3 devloper", "devops engineer"],
  icons: {
    icon: { url: '/favicon.ico', sizes: '32x32' },
    },
  openGraph: {
    description: "I specialize in developing full-stack applications with blockchain integration, combining modern web technologies and DevOps practices",
    url: "https://hemant5harma.tech",
    siteName: "Hemant Sharma",
   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}