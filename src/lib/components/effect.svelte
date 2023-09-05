<script lang="ts">
  import { browser } from '$app/environment';

  import {motionStore} from '../store/motion.store.js';

  // const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const chars = "01";

  const randomString = (length: number): string => {
    let str = '';
    for (let i = 0; i < length; i++) {
      str += chars.at(Math.floor(Math.random() * chars.length));
    }
    return str;
  }

  let boxElement: HTMLDivElement | undefined = undefined;

  const updateContent = () => {
    if (boxElement) boxElement.innerText = randomString(10000);
  }

  let clear: NodeJS.Timer;
  $: {
    clearInterval(clear)
    clear = setInterval(updateContent, 100)
  }

  if (browser) {
    document.onmousemove = (e) => {
      if (!boxElement) return;
      const rect = boxElement.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

      boxElement.style.setProperty("--x", `${x}px`);
      boxElement.style.setProperty("--y", `${y}px`);
    };
  }

</script>

{#if $motionStore === 'no-preference'}
<div
  class="z-[0] absolute top-[0] bottom-[0] left-[0] right-[0] whitespace-normal break-all overflow-hidden select-none rounded-2xl text-justify font-[monospace]
  text-zinc-800 dark:text-snow-storm-1
  mix-blend-darken dark:mix-blend-lighten
  opacity-20 dark:opacity-10
  text-md
  "
  style="
  --x: 50%;
  --y: 50%;
  -webkit-mask-image: radial-gradient(
    calc(400px * 0.8) circle at var(--x) var(--y),
    rgb(255 255 255) 20%,
    rgb(255 255 255 / 25%),
    transparent
  );
  "
  bind:this={boxElement}
></div>
{/if}
