import React from "react";
import { deleteUrl } from "./mocks/api";

function URLitem({ url }) {
  return (
    <div>
      <b>Origin URL</b>
      <a href="url.originUrl"> {url.originUrl} </a>
      <div>
        <b>Short URL</b>
        <a href="url.shortUrl">{url.shortUrl} </a>
      </div>
      <button>X</button>
    </div>
  );
}

export default URLitem;
