import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMeme = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://meme-api.com/gimme');
      const data = await response.json();
      setMeme(data);
    } catch (error) {
      console.error('Error fetching meme:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">
        <Link 
          to="/" 
          className="inline-block mb-6 text-gray-400 hover:text-white transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">404</h1>
        <h2 className="text-3xl font-semibold mb-3 text-gray-200">Page Not Found</h2>
        <p className="text-lg text-gray-400 mb-12">The page you're looking for doesn't exist. Here's something to brighten your day.</p>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-400 text-lg">Loading...</p>
          </div>
        ) : meme ? (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-gray-700">
            <img src={meme.url} alt={meme.title} className="w-full max-h-[500px] object-contain rounded-lg mb-4" />
            <p className="text-gray-300 text-lg font-medium">{meme.title}</p>
          </div>
        ) : null}
        <button
          onClick={fetchMeme}
          className="mt-8 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
        >
          Generate New Meme
        </button>
      </div>
    </div>
  );
}

export default Contact;
