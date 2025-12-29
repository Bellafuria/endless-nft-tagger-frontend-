'use client';

import { useState } from 'react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-react";

export default function Home() {
  const [nftAddress, setNftAddress] = useState('');
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState<string[]>(['art', 'pfp', 'generative', 'music', 'abstract']);
  const [attachments, setAttachments] = useState([
    { cid: 'QmExample123...', filename: 'cover.jpg', mime_type: 'image/jpeg', size: 1024000 }
  ]);

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
      alert('✅ Tag added! (simulated on-chain transaction)');
    }
  };

  const handleLoad = () => {
    if (nftAddress) {
      alert(`Loading tags for NFT: ${nftAddress}\n\nCurrent mock tags: ${tags.join(', ')}`);
    }
  };

  const handleAttach = () => {
    alert('📎 File attachment simulation (IPFS CID upload coming soon)');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Endless NFT Tagger
          </h1>
          <p className="text-xl text-gray-300">
            Collaborative on-chain tagging & file attachments for Endless ecosystem NFTs
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <WalletSelector />
        </div>

        <div className="bg-gray-800/60 backdrop-blur-lg rounded-3xl p-10 shadow-2xl mb-12">
          <label className="block text-xl font-medium mb-4">NFT Object Address</label>
          <input
            type="text"
            value={nftAddress}
            onChange={(e) => setNftAddress(e.target.value)}
            placeholder="0x... (from Luffa or testnet explorer)"
            className="w-full px-6 py-4 bg-gray-900 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition"
          />
          <button
            onClick={handleLoad}
            className="mt-6 w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-xl transition"
          >
            Load Tags & Attachments
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-gray-800/60 backdrop-blur-lg rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-8">Current Tags</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              {tags.map((tag, i) => (
                <span key={i} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xl font-medium">
                  #{tag}
                </span>
              ))}
            </div>
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="New tag e.g. pixelart"
              className="w-full px-6 py-4 bg-gray-900 rounded-xl mb-6"
            />
            <button
              onClick={handleAddTag}
              className="w-full py-4 bg-green-600 hover:bg-green-700 rounded-xl font-bold text-xl transition"
            >
              Add Collaborative Tag
            </button>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-lg rounded-3xl p-10">
            <h2 className="text-4xl font-bold mb-8">File Attachments</h2>
            <div className="space-y-6 mb-8">
              {attachments.map((att, i) => (
                <div key={i} className="bg-gray-900 rounded-xl p-6">
                  <p className="text-xl font-medium">{att.filename}</p>
                  <p className="text-sm text-gray-400 mt-1">CID: {att.cid}</p>
                  <p className="text-sm text-gray-500">Size: {(att.size / 1024).toFixed(0)} KB</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleAttach}
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold text-xl transition"
            >
              Attach File via IPFS CID
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-16 text-sm">
          Demo for Endless Ecosystem Creative Proposal Competition • January 2026<br />
          Contract code: <a href="https://github.com/Bellafuria/endless-nft-tagger" className="text-blue-400 underline">github.com/Bellafuria/endless-nft-tagger</a>
        </p>
      </div>
    </main>
  );
}