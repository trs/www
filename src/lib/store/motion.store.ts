import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type MotionName = 'no-preference' | 'reduce' | null;

export const motionStore = writable<MotionName>(null, (set) => {
  if (!browser) return;

  const savedTheme = loadMotion();
  savedTheme && set(savedTheme);

  if (!window.matchMedia) return;

  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  !savedTheme && set(query.matches ? 'reduce' : 'no-preference');

  const listener = (event: MediaQueryListEvent) => set(event.matches ? 'reduce' : 'no-preference');

  query.addEventListener("change", listener);

  return () => query.removeEventListener("change", listener);
});

const loadMotion = (): MotionName => {
  if (!browser) return null;

  return document.documentElement.getAttribute("data-motion") as MotionName;
}

const saveMotion = (motion: MotionName) => {
  if (!browser) return;
  if (!motion) return;

  document.documentElement.setAttribute("data-motion", motion);

  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `motion=${motion}; max-age=${oneYear}; path=/`;
}

motionStore.subscribe(saveMotion);
