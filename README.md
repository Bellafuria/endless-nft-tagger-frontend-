# Endless NFT Tagger

**Collaborative on-chain tagging & file attachments for Endless ecosystem NFTs**

A community-driven tool to add discoverable tags (e.g., #art, #pfp, #generative) and attach files via IPFS to any NFT in the Endless ecosystem (built on Aptos/Luffa).

## Live Demo
🚀 https://endless-nft-tagger-frontend-stwp.vercel.app

![Endless NFT Tagger Screenshot](Endless%20NFT%20Tagger%20screenshot.JPG)
*(Screenshot of the interface showing tag loading, current tags, and file attachments)*

## Features
- Enter any NFT Object Address (from Luffa or Aptos testnet explorer)
- Load and view current community tags
- View on-chain file attachments (IPFS CID, size, etc.)
- (Future) Connect wallet to add new tags or attach files directly on-chain

## Current Demo Status
This is a working demo with example hardcoded data for illustration. Full on-chain integration coming soon via the Move module.

## Tech Stack
- Frontend: Next.js 16 (App Router), Tailwind CSS v4, Aptos Wallet Adapter
- Backend: Aptos Move module for on-chain storage

## Repositories
- **Frontend** (this repo): https://github.com/Bellafuria/endless-nft-tagger-frontend-
- **Backend** (Move module): https://github.com/Bellafuria/endless-nft-tagger

Submitted to **Endless Ecosystem Creative Proposal Competition** (January 2026)  
Category: Fill a Gap – improving NFT discoverability and metadata in the Endless ecosystem.
