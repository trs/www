<script lang="ts">
	import { motionStore } from '../store/motion.store.js';

	const CHARS = '01';
	const LENGTH = 10000;
	const UPDATE_INTERVAL = 150;

	const randomString = (length: number): string => {
		let str = '';
		for (let i = 0; i < length; i++) {
			str += CHARS.at(Math.floor(Math.random() * CHARS.length));
		}
		return str;
	};

	let text: string = $state(randomString(LENGTH));

	const updateContent = () => {
		text = randomString(LENGTH);
	};

	let clear: number | undefined;
	$effect(() => {
		clearInterval(clear);
		clear = setInterval(updateContent, UPDATE_INTERVAL);
	});
</script>

{#if $motionStore === 'no-preference'}
	<div
		class="dark:text-snow-storm-1 text-md absolute top-[0] right-[0] bottom-[0] left-[0] z-[0] overflow-hidden rounded-2xl text-justify font-[monospace] break-all
  whitespace-normal text-zinc-800
  opacity-20 mix-blend-darken
  select-none dark:opacity-10
  dark:mix-blend-lighten
  "
		style="
  --x: 30%;
  --y: 40%;
  mask-image: radial-gradient(
    calc(400px * 0.8) circle at var(--x) var(--y),
    rgb(255 255 255) 20%,
    rgb(255 255 255 / 25%),
    transparent
  );
  "
	>{text}</div>
{/if}
