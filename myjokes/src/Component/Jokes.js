import { useEffect, useState } from "react";

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJokes = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://contentgen-two.vercel.app/?vercelToolbarCode=OyhHDnBAnOXv-xf/api/jokes");
      if (!response.ok) throw new Error("Failed to fetch jokes");
      const data = await response.json();
      setJokes([data]); // Adjust based on API response structure
      console.log([data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch jokes on initial render
  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-gray-800 text-2xl mb-5">Random Jokes</h1>
        {error && <p className="text-red-600 font-bold mb-5">{error}</p>}
        <div className="mb-5">
          {loading ? (
            <p>Loading joke...</p>
          ) : (
            jokes.map((joke, index) => (
              <div
                className="bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-md"
                key={index}
              >
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Category:</strong> {joke.type}
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-3">{joke.setup}</p>
                <p className="text-gray-700">{joke.punchline}</p>
              </div>
            ))
          )}
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-4 text-lg rounded-md cursor-pointer transition duration-300 hover:bg-blue-700 active:scale-95"
          onClick={fetchJokes}
        >
          Generate New Joke
        </button>
      </div>
    </div>
  );
}
