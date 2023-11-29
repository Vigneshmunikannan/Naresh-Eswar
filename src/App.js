
import Our from "./Our";
import Works from "./Works";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./Page"
import Gallery2 from "./Gallery2";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Naresh-Eswar" element={<Page/>}/>
          <Route path="/Naresh-Eswar/works" element={<Works />} />
          <Route path="/Naresh-Eswar/gallery" element={<Gallery2/>}/>
        </Routes>
        <Our/>
      </Router>
    </div>
  );
}

export default App;
