import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  HashRouter  as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App=()=> {
  let pagesize=20;
  let apikey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <Navbar />
          
      <LoadingBar
      height={3}
        color="#f11946"
        progress={progress}
        
      />
        <Routes>
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pagesize={pagesize} country="us" category="business"/>}>  </Route>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={pagesize} country="us" category="general"/> }> </Route>
          <Route exact path="/general"element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={pagesize} country="us" category="general"/> }> </Route>
          <Route exact path="/entertainment" element={ <News setProgress={setProgress} apikey={apikey} key="entertainment" pagesize={pagesize} country="us" category="entertainment"/> }></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pagesize={pagesize} country="us" category="science"/> }> </Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pagesize={pagesize} country="us" category="health"/>}>  </Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pagesize={pagesize} country="us" category="sports"/> }> </Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pagesize={pagesize} country="us" category="technology"/> }>  </Route>
        </Routes>
        </Router>
      </div>
    );
  
}
export default App;