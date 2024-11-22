import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Jokes from "./Component/Jokes";
import Main from "./Component/Main";
import Yt from "./Component/Yt";
import Chat from "./Component/Chat";
import TranslatorApp from "./Component/Translator";
import News from "./Component/News";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Main />}/>
        <Route  path="/Jokes" element={<Jokes />} />
        <Route  path="/yt" element={<Yt/>} />
        <Route  path="/lang" element={<TranslatorApp/> } />
        <Route  path="/News" element={<News /> } />

      </Routes>
    </Router>
  );
}

export default App;
