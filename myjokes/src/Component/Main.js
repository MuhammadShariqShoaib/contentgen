import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className='bg-black '>
        <h1 className='  text-center font-serif  text-white'>An AI content gernator App  </h1>
    <div className="h-screen flex items-center justify-center ">
      <div className="text-center">
        <h1 className="p-2  font-serif mb-4 text-white  ">This is main page</h1>
        <button className="m-2 p-3 bg-blue-800 text-white">
          <Link to="/Jokes">Jokes by AI</Link>
        </button>
        <br></br>
        <button className="m-2 p-3 bg-blue-800  text-white">
        <Link to="/yt">Recomended videos by AI</Link>
        </button>
        <br></br>
        <button className="m-2 p-3 bg-blue-800  text-white">
        <Link to="/lang">language Translator</Link>
        </button>
        <br></br>
        <button className="m-2 p-3 bg-blue-800  text-white">
        <Link to="/news">Read today's Latest news</Link>
        </button>

        </div>
      </div>
    </div>
  );
}
