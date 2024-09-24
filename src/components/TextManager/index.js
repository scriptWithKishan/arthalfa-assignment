import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./index.css";

const TextManager = () => {
  const [text, setText] = useState("");
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");
  const [modifiedText, setModifiedText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleReplace = () => {
    if (searchString.trim() && replaceString.trim()) {
      // Case-sensitive search
      const escapedSearchString = searchString.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );
      const regex = new RegExp(escapedSearchString, "g"); // 'g' for global, no 'i' for case-sensitive

      if (!regex.test(text)) {
        toast.error("Match not found.");
        return;
      }

      const highlightedText = text.replace(
        regex,
        () => `<span class="highlight">${replaceString}</span>`
      );
      setModifiedText(highlightedText);

      setText(text.replaceAll(searchString, replaceString));
      setSearchString("");
      setReplaceString("");
      toast.success("Text replaced successfully!");
    } else {
      toast.error("Please provide valid strings for replacement.");
    }
  };

  useEffect(() => {
    const words = text.match(/\b\w+\b/g) || [];
    setWordCount(words.length);

    const uniqueWords = new Set(words.map((word) => word.toLowerCase()));
    setUniqueWordCount(uniqueWords.size);

    const characters = text.replace(/\s|[^\w]/g, "");
    setCharCount(characters.length);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <ToastContainer />
      <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <button className="mode-toggle-btn" onClick={toggleMode}>
          {isDarkMode ? (
            <MdLightMode className="light-btn" />
          ) : (
            <MdDarkMode className="dark-btn" />
          )}
        </button>
        <div className="text-container">
          <h1>Text Manager</h1>

          <textarea
            className="textarea"
            value={text}
            onChange={handleTextChange}
            placeholder="Type or paste text here..."
          />

          <div className="stats">
            <p className="stats-text">Total Words: {wordCount}</p>
            <p className="stats-text">Unique Words: {uniqueWordCount}</p>
            <p className="stats-text">
              Characters (Excluding spaces/punctuation): {charCount}
            </p>
          </div>

          <div className="replacement-container">
            <input
              type="text"
              placeholder="Search string"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <input
              type="text"
              placeholder="Replace with"
              value={replaceString}
              onChange={(e) => setReplaceString(e.target.value)}
            />
            <button className="replace-btn" onClick={handleReplace}>
              Replace
            </button>
          </div>

          <CopyToClipboard className="copy-to-clipboard" text={text}>
            <button>Copy to Clipboard</button>
          </CopyToClipboard>

          <div
            className="modified-text"
            dangerouslySetInnerHTML={{ __html: modifiedText }}
          />
        </div>
      </div>
    </>
  );
};

export default TextManager;
