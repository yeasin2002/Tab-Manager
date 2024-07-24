import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [allTabs, setTabs] = useState<chrome.tabs.Tab[]>([]);

  useEffect(() => {
    chrome.tabs.query({}, function (tabs) {
      setTabs(tabs);
    });
  }, []);

  const handleClose = (tabId: number) => {
    chrome.tabs.remove(tabId, () => {
      setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));
    });
  };

  return (
    <div id="app">
      <h1 className="main-heading">Tab Manager </h1>
      <div className="top-btn-wrapper">
        <button className="add-btn" onClick={() => chrome.tabs.create({})}>
          New Tab
        </button>
      </div>

      {allTabs.map((tabItems) => {
        return (
          <div className="tab-items-wrapper">
            <p>{tabItems.title}</p>
            <button
              className="close-btn"
              onClick={() => handleClose(tabItems.id!)}
            >
              Close
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
