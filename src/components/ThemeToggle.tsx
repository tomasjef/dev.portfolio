"use client";

// Sun/moon button in the header. Flips the page between light and dark and
// remembers the choice; picking the system's own mode forgets it, so the page
// follows the system again. layout.tsx applies the saved choice on load.
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    const system = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    try {
      if (next === system) localStorage.removeItem("theme");
      else localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      className="-my-2 -mr-2 flex size-10 items-center justify-center rounded-full text-muted transition hover:bg-tile hover:text-ink active:scale-[0.97]"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="size-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Moon in light mode, sun in dark: each shows the mode it switches to */}
        <path className="dark:hidden" d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        <g className="hidden dark:inline">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
        </g>
      </svg>
    </button>
  );
}
