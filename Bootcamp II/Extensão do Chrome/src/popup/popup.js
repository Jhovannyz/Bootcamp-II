document.getElementById("toggleDark").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleDarkMode
  });
});

function toggleDarkMode() {
  const darkClass = "ext-dark-mode";
  if (document.body.classList.contains(darkClass)) {
    document.body.classList.remove(darkClass);
    document.body.style.filter = "";
  } else {
    document.body.classList.add(darkClass);
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
  }
}