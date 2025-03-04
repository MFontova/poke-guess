import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Menu } from "./components/Menu";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "PokeGuess",
  description: "Can you guess the Pokémon?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.className} antialiased p-3`}
      >
        <Menu/>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
