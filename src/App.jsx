import "./App.css";
import UrlInput from "./UrlInput";
import UrlList from "./UrlList";

// import { useState } from "react";

function App() {
  // const [urls, setUrls] = useState([]);

  return (
    <div>
      <h1>Short URL</h1>
      {/* <UrlInput url={urls} setUrl={setUrls} /> */}
      {/* <UrlList url={urls} setUrl={setUrls} /> */}
      <UrlInput />
      <UrlList />
    </div>
  );
}

export default App;
