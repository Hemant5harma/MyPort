import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Hemant Sharma </title> 
        <meta 
          name="description" 
          content="I specialize in developing full-stack applications with blockchain integration, combining modern web technologies, DevOps practices, and Web3 development to build secure, scalable, and decentralized solutions. Based in Jaipur, Rajasthan."
        />
        <meta 
          name="keywords" 
          content="web development, Next.js, React, frontend development, devops , aws , docker, blockchain"
        />
        <meta property="og:title" content="Hemant Sharma - DevOps Engineer" />
        <meta 
          property="og:description" 
          content="I specialize in developing full-stack applications with blockchain integration, combining modern web technologies, DevOps practices, and Web3 development to build secure, scalable, and decentralized solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hemant5harma.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}