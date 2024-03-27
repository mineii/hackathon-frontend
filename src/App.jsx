import "./App.css";
import UrlInput from "./UrlInput";
import UrlList from "./UrlList";

// import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Short URL</h1>
      <UrlInput />
      <UrlList />
    </div>
  );
}

export default App;
