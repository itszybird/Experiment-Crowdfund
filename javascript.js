document.querySelectorAll('[data-bs-toggle="collapse"][data-bs-target]').forEach((toggle) => {
  const selector = toggle.getAttribute("data-bs-target");
  const panel = selector ? document.querySelector(selector) : null;

  if (!panel) return;

  const closePanel = () => {
    toggle.classList.add("collapsed");
    toggle.setAttribute("aria-expanded", "false");
    panel.classList.remove("in", "show");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.classList.toggle("collapsed", expanded);
    toggle.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("in", !expanded);
    panel.classList.toggle("show", !expanded);
  });

  panel.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closePanel();
    }
  });
});
