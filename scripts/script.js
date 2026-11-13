(() => {
  const root = document.documentElement;
  const storageKey = "anydesk-personal-colors";
  const defaults = { theme: "#F04438", logo: "#F04438" };
  const isHexColor = (value) => /^#[0-9a-f]{6}$/i.test(value);

  let colors = { ...defaults };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    if (isHexColor(saved.theme)) colors.theme = saved.theme.toUpperCase();
    if (isHexColor(saved.logo)) colors.logo = saved.logo.toUpperCase();
  } catch (error) {
    document.querySelectorAll(".save-status").forEach((status) => {
      status.textContent = "Saved colors could not be loaded from this browser.";
    });
  }

  const updatePressed = (selector, attribute, color) => {
    document.querySelectorAll(selector).forEach((button) => {
      button.setAttribute("aria-pressed", button.getAttribute(attribute).toUpperCase() === color);
    });
  };

  const applyColors = (save = false) => {
    root.style.setProperty("--brand", colors.theme);
    root.style.setProperty("--strip", colors.theme);
    root.style.setProperty("--logo-color", colors.logo);

    const themeInput = document.querySelector("#theme-color");
    const logoInput = document.querySelector("#logo-color");
    const themeValue = document.querySelector("#theme-value");
    const logoValue = document.querySelector("#logo-value");
    const themeSwatch = document.querySelector(".theme-swatch");
    const logoSwatch = document.querySelector(".logo-swatch");

    if (themeInput) themeInput.value = colors.theme;
    if (logoInput) logoInput.value = colors.logo;
    if (themeValue) themeValue.textContent = colors.theme;
    if (logoValue) logoValue.textContent = colors.logo;
    if (themeSwatch) themeSwatch.style.backgroundColor = colors.theme;
    if (logoSwatch) logoSwatch.style.backgroundColor = colors.logo;

    updatePressed("[data-theme]", "data-theme", colors.theme);
    updatePressed("[data-logo]", "data-logo", colors.logo);

    if (save) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(colors));
        document.querySelectorAll(".save-status").forEach((status) => {
          status.textContent = "Your colors are saved automatically.";
        });
      } catch (error) {
        document.querySelectorAll(".save-status").forEach((status) => {
          status.textContent = "Could not save your colors. Check your browser storage settings.";
        });
      }
    }
  };

  applyColors();

  document.querySelector("#theme-color")?.addEventListener("input", (event) => {
    colors.theme = event.currentTarget.value.toUpperCase();
    applyColors(true);
  });
  document.querySelector("#logo-color")?.addEventListener("input", (event) => {
    colors.logo = event.currentTarget.value.toUpperCase();
    applyColors(true);
  });

  document.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      colors.theme = button.dataset.theme.toUpperCase();
      applyColors(true);
    });
  });
  document.querySelectorAll("[data-logo]").forEach((button) => {
    button.addEventListener("click", () => {
      colors.logo = button.dataset.logo.toUpperCase();
      applyColors(true);
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle?.addEventListener("click", () => {
    const isOpen = document.querySelector(".site-header").classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  document.querySelector("[data-copy-id]")?.addEventListener("click", async (event) => {
    const id = document.querySelector("#connection-id").textContent.trim();
    const status = document.querySelector(".copy-status");
    try {
      await navigator.clipboard.writeText(id);
      status.textContent = "Connection ID copied.";
    } catch (error) {
      status.textContent = "Could not copy automatically. Select the ID to copy it.";
    }
  });
})();
