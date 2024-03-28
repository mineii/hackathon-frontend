import { useState, useEffect } from "react";
import UrlItem from "./UrlItem";
import { fetchUrls } from "./mocks/api";

function UrlList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const getUrls = async () => {
      const response = await fetchUrls();
      setUrls(response.data);
    };

    getUrls();
  }, []);

  return (
    <div>
      {urls.length === 0 && <p>No Lists</p>}
      {urls.length !== 0 && (
        <>
          <p>URL Lists</p>
          {urls.map((url) => (
            <UrlItem key={url.id} url={url} urls={urls} setUrls={setUrls} />
          ))}
        </>
      )}
    </div>
  );
}

export default UrlList;
