import { useState, useEffect } from "react";
import { createShortUrl } from "./mocks/api";

function UrlInput() {
  const [urls, setUrls] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitClick = async () => {
    const res = await createShortUrl(input);
    setUrls([...urls, res]);
    // console.log(urls);
  };

  // 확인
  useEffect(() => {
    console.log("state update:", urls);
  }, [urls]);

  return (
    <div>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="URL을 입력하세요."
      />
      <button onClick={handleSubmitClick} className="input-button">
        실행
      </button>
    </div>
  );
}

export default UrlInput;
