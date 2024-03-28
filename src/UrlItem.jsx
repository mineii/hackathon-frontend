import React from "react";
import { deleteUrl } from "./mocks/api";

function URLitem({ url, urls, setUrls }) {
  const handleDelete = async (id) => {
    await deleteUrl(id);
    const filteredUrls = urls.filter((url) => url.id !== id);
    setUrls(filteredUrls);
  };
  return (
    <div>
      <b>Origin URL</b>
      <a href="url.originUrl"> {url.originUrl} </a>
      <div>
        <b>Short URL</b>
        <a href="url.shortUrl">{url.shortUrl} </a>
      </div>
      <button onClick={() => handleDelete(url.id)}>X</button>
    </div>
  );
}

export default URLitem;
