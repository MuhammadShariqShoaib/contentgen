import React, { useEffect, useState } from "react";

export default function Yt() {
  const [yt, setYt] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // New state to track the current video

  const fetchYt = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5001/api/yt");
      if (!response.ok) throw new Error("Failed to fetch video");
      const data = await response.json();
      setYt(data); // Adjust based on API response structure
      setCurrentIndex(0); // Reset to first video when new data is fetched
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on initial render
  useEffect(() => {
    fetchYt();
  }, []);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  function stripHtmlTags(html) {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
  }

  const handleNextVideo = () => {
    if (currentIndex < yt.length - 1 ) {
      setCurrentIndex(currentIndex + 1); // Show next video
    }
     else
     {
        setCurrentIndex(0); // Loop back to first video
     }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg w-3/6">
        <h1 className="text-gray-800 text-2xl mb-5">Random YouTube Video</h1>
        {error && <p className="text-red-600 font-bold mb-5">{error}</p>}
        <div className="mb-5">
          {loading ? (
            <p>Loading video...</p>
          ) : (
            yt.length > 0 && (
              <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Name:</strong> {yt[currentIndex].name}
                </p>
                <p className="text-gray-700 text-lg font-semibold">
                  {yt[currentIndex].language}
                </p>
                <p className="text-gray-800 mb-3">{yt[currentIndex].type}</p>
                <a
                  href={yt[currentIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {yt[currentIndex].url}
                </a>
                <p className="text-gray-700">
                  {truncateText(stripHtmlTags(yt[currentIndex].summary), 200)}
                </p>
              </div>
            )
          )}
        </div>
        <button
          className={`bg-blue-600 text-white py-2 px-4 text-lg rounded-md cursor-pointer transition duration-300 hover:bg-blue-700 active:scale-95 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextVideo}
          disabled={loading || yt.length === 0 || currentIndex >= yt.length - 1}
        >
          Generate Video
        </button>
      </div>
    </div>
  );
}
