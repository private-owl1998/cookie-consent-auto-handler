document.addEventListener('DOMContentLoaded', async () => {
  const { mode } = await chrome.storage.sync.get({ mode: "reject" });
  document.querySelector(`input[value="${mode}"]`).checked = true;

  document.querySelectorAll('input[name="mode"]').forEach(radio => {
    radio.addEventListener('change', () => {
      chrome.storage.sync.set({ mode: radio.value });
    });
  });
});