<script lang="ts">
	import Editor from '$lib/components/editor.svelte';
	import Code from '$lib/components/code.svelte';
	import Effect from '$lib/components/effect.svelte';
</script>

<svelte:head>
	<title>Tyler Stewart</title>
</svelte:head>

<Effect></Effect>

<div
	class="bg-snow-storm-3 flex h-full w-full place-content-center place-items-center dark:bg-zinc-900"
>
	<main
		class="relative flex max-w-min flex-col items-center gap-6 text-xs sm:max-w-6xl sm:text-base"
	>
		<Editor>
			<Code></Code>
		</Editor>
	</main>
</div>
