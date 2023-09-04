import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type ThemeName = 'dark' | 'light' | null;

export const themeStore = writable<ThemeName>(null, (set) => {
  if (!browser) return;

  const savedTheme = loadTheme();
  savedTheme && set(savedTheme);

  if (!window.matchMedia) return;

  const query = window.matchMedia('(prefers-color-scheme: dark)');
  !savedTheme && set(query.matches ? 'dark' : 'light');

  const listener = (event: MediaQueryListEvent) => set(event.matches ? 'dark' : 'light');

  query.addEventListener("change", listener);

  return () => query.removeEventListener("change", listener);
});

const loadTheme = (): ThemeName => {
  if (!browser) return null;

  return document.documentElement.getAttribute("data-theme") as ThemeName;
}

const saveTheme = (theme: ThemeName) => {
  if (!browser) return;
  if (!theme) return;

  document.documentElement.setAttribute("data-theme", theme);

  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `theme=${theme}; max-age=${oneYear}; path=/`;
}

themeStore.subscribe(saveTheme);
