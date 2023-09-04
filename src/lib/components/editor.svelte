<script lang="ts">
  import { Moon, Sun } from 'lucide-svelte';

  import {themeStore} from '../store/theme.store.js';

  const toggleTheme = () => themeStore.update((value) => value === 'dark' ? 'light' : 'dark');
</script>

<div class="max-w-fit sm:max-w-fit rounded-xl bg-snow-storm-1 dark:bg-polar-night-4">
  <div class="px-6 pt-5 flex items-center space-x-2 rounded-t-xl">
    <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-mac-red rounded-full inline-block"></span>
    <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-mac-yellow rounded-full inline-block"></span>
    <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-mac-green rounded-full inline-block"></span>

    <span class="grow"></span>

    <span class="
      h-7
      w-7
      text-polar-night-4 dark:text-snow-storm-1
      dark:hover:bg-polar-night-2 hover:bg-snow-storm-3
      p-1
      rounded-md
      flex
    "
      on:click={toggleTheme}
      on:keypress={toggleTheme}
      role="button"
      tabindex={0}
    >
      {#if $themeStore === 'dark'}
      <Moon></Moon>
      {:else if $themeStore === 'light'}
      <Sun></Sun>
      {/if}
    </span>
  </div>

  <div class="px-6 py-4 pb-6 rounded-b-xl">
    <slot></slot>
  </div>
</div>
