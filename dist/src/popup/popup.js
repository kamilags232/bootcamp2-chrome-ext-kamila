const btn = document.getElementById("toggle-focus");
const status = document.getElementById("status");

async function updateStatus() {
  const { focusMode } = await chrome.storage.local.get("focusMode");
  if (focusMode) {
    btn.textContent = "Desativar Foco";
    status.textContent = "🚀 Modo foco ativado";
  } else {
    btn.textContent = "Ativar Foco";
    status.textContent = "Modo foco desativado";
  }
}

btn.addEventListener("click", async () => {
  const { focusMode } = await chrome.storage.local.get("focusMode");
  await chrome.storage.local.set({ focusMode: !focusMode });
  chrome.runtime.sendMessage({ type: "TOGGLE_FOCUS" });
  updateStatus();
});

updateStatus();
