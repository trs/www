<script context="module" lang="ts">
	// export const prerender = true;
	// export const hydrate = false;
	// export const ssr = true;
</script>

<script lang="ts">
  import Editor from '$lib/components/editor.svelte';
  import Code from '$lib/components/code.svelte';
</script>

<svelte:head>
	<title>Tyler Stewart</title>
</svelte:head>

<main class="flex flex-col items-center max-w-min sm:max-w-6xl relative gap-6 text-xs sm:text-base">
  <Editor>
    <Code></Code>
  </Editor>
</main>
