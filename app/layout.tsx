'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const WalletProvider = dynamic(
  () => import("@aptos-labs/wallet-adapter-react").then((mod) => mod.WalletProvider),
  { ssr: false }
);

import { PetraWallet } from "petra-plugin-wallet-adapter";
import { FewchaWallet } from "fewcha-plugin-wallet-adapter";

const inter = Inter({ subsets: ["latin"] });

const wallets = [
  new PetraWallet(),
  new FewchaWallet(),
];

export const metadata: Metadata = {
  title: "Endless NFT Tagger Demo",
  description: "On-chain NFT tagging for Endless Protocol ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider wallets={wallets} autoConnect={false}>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}