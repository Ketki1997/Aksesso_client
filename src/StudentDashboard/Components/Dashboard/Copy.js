import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Copy.css";

const Copy = () => {
  const [value, setValue] = useState("www.aksesso.com");
  const [copy, setCopy] = useState(false);

  return (
    <div className="app">
      <div className="input_group">
        <i class="bi bi-link-45deg"></i>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <CopyToClipboard text={value} onCopy={() => setCopy(true)}>
          <button className={`${copy ? "copied" : "copy"}`}>
            {copy ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Copy;
