<script context="module" lang="ts">
	export const prerender = true;
	export const hydrate = false;
	export const ssr = true;
</script>

<script lang="ts">
  import Editor from '$lib/components/editor.svelte';
  import Code from '$lib/components/code.svelte';
  import Avatar from '$lib/components/avatar.svelte';
</script>

<main class="flex flex-col items-center max-w-6xl relative gap-6">
  <Avatar />

  <Editor>
    <Code></Code>
  </Editor>
</main>