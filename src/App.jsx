import "./App.css";
import UrlInput from "./UrlInput";
import UrlList from "./UrlList";

import { useState } from "react";

function App() {
  const [url, setUrl] = useState([]);

  return (
    <div>
      <h1>Short URL</h1>
      <UrlInput url={url} setUrl={setUrl} />
      <UrlList url={url} setUrl={setUrl} />
    </div>
  );
}

export default App;
