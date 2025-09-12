// Service Worker (Background Script)
// Mantém a extensão ativa em segundo plano.
// Útil para ouvir eventos globais como instalação ou atualização.

chrome.runtime.onInstalled.addListener(() => {
  console.log("Dark Mode Toggle instalado com sucesso!");
});

// Exemplo de listener para futuros contextMenus ou atalhos
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "ping") {
    sendResponse({ reply: "pong from background" });
  }
});
