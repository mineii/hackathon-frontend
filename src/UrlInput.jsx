import { useState } from "react";
import { createShortUrl } from "./mocks/api";

function UrlInput({ url, setUrl }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitClick = async () => {
    const res = await createShortUrl(input);
    setUrl([...url, res]);
    console.log(url);
  };

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
