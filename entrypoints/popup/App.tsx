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
    return chrome.tabs.remove(tabId, () => {
      setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));
    });
  };
  const handleGoTab = (tabId: number) => {
    return chrome.tabs.update(tabId, { active: true });
  };

  const handleBack = () => {
     chrome.tabs.goBack();
  };

  return (
    <div id="app">
      <h1 className="main-heading">Tab Manager </h1>
      <div className="top-btn-wrapper">
        <button className="add-btn" onClick={() => chrome.tabs.create({})}>
          New Tab
        </button>
        <button className="add-btn" onClick={handleBack}>
          Back
        </button>
      </div>

      {allTabs.map((tabItems) => {
        return (
          <div
            className={` tab-items-wrapper ${
              tabItems.active ? "active-tab" : " non-active-tab "
            } `}
          >
            <p>{tabItems.title}</p>

            <div className="action-btn-container">
              <button
                className="close-btn"
                onClick={() => handleClose(tabItems.id!)}
              >
                Close
              </button>

              <button
                className="go-btn"
                onClick={() => handleGoTab(tabItems.id!)}
              >
                Open
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
