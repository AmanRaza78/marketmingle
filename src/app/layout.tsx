import "~/styles/globals.css";

import { Inter, Poppins } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

import Navbar from "~/components/navbar";

import Footer from "~/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "MarketMingle",
  description: "An online marketplace created using T3 stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-gray-800 text-white`}>
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
