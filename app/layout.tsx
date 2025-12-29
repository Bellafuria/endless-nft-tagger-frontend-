import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { FewchaWallet } from "fewcha-plugin-wallet-adapter";
import { MartianWallet } from "martian-plugin-wallet-adapter";

const inter = Inter({ subsets: ["latin"] });

const wallets = [
  new PetraWallet(),
  new FewchaWallet(),
  new MartianWallet(),
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
