(async function () {
  const { mode } = await chrome.storage.sync.get({ mode: "reject" });

  const keywords = mode === "accept"
    ? [
        "alle akzeptieren", "akzeptieren", "zustimmen", "accept all", "agree", "i agree",
        "allow all", "accept cookies", "got it", "yes, i agree", "enable all"
      ]
    : [
        "nur notwendige", "alle ablehnen", "ablehnen", "notwendige", "reject all", "decline",
        "essential only", "reject cookies", "disable all", "reject non-essential"
      ];

  const buttons = Array.from(document.querySelectorAll("button, input[type=button], a"))
    .filter(btn => {
      const text = (btn.innerText || btn.value || "").toLowerCase().trim();
      return keywords.some(k => text.includes(k));
    });

  if (buttons.length > 0) {
    buttons[0].click();
    console.log(`[CookieHandler] ${mode} – Button "${buttons[0].innerText || buttons[0].value}" clicked`);
  }
})();