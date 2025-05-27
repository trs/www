<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';

	import { themeStore } from '../store/theme.store.js';

	const toggleTheme = () => themeStore.update((value) => (value === 'dark' ? 'light' : 'dark'));
</script>

<div
	class="relative animate-(--animate-glow-move) animate-(--animate-gradient-move) rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:300%_300%] p-[3px] shadow-[0_0_20px_#8b5cf6]"
>
	<div class="bg-snow-storm-1 dark:bg-polar-night-4 relative max-w-fit rounded-xl sm:max-w-fit">
		<div class="flex items-center space-x-2 rounded-t-xl px-6 pt-5">
			<span class="bg-mac-red inline-block h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></span>
			<span class="bg-mac-yellow inline-block h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></span>
			<span class="bg-mac-green inline-block h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></span>

			<span class="grow"></span>

			<span
				class="
        text-polar-night-4
        dark:text-snow-storm-1
        dark:hover:bg-polar-night-2 hover:bg-snow-storm-3
        flex h-7
        w-7
        rounded-md
        p-1
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

		<div class="rounded-b-xl px-6 py-4 pb-6">
			<slot></slot>
		</div>
	</div>
</div>
