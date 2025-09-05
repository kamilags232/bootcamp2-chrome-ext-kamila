const blockedSites = ["facebook.com", "instagram.com", "tiktok.com", "twitter.com"];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ focusMode: false });
});

// Ouvinte para alternar foco
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "TOGGLE_FOCUS") {
    chrome.storage.local.get("focusMode", ({ focusMode }) => {
      if (focusMode) {
        // Fecha todas as abas, exceto a atual
        chrome.tabs.query({}, (tabs) => {
          tabs.forEach((tab) => {
            if (!tab.active && tab.id) chrome.tabs.remove(tab.id);
          });
        });
      }
    });
  }
});

// Bloqueia abertura de sites
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading") {
    chrome.storage.local.get("focusMode", ({ focusMode }) => {
      if (focusMode && blockedSites.some((s) => tab.url.includes(s))) {
        chrome.tabs.remove(tabId);
      }
    });
  }
});
