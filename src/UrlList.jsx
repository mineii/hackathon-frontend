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
          <b>URL Lists</b>
          {urls.map((url) => (
            <UrlItem key={url.id} url={url} />
          ))}
        </>
      )}
    </div>
  );
}

export default UrlList;
