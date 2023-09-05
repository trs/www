<script lang="ts">
  import Editor from '$lib/components/editor.svelte';
  import Code from '$lib/components/code.svelte';
	import Effect from '$lib/components/effect.svelte';
</script>

<svelte:head>
	<title>Tyler Stewart</title>
</svelte:head>

<Effect></Effect>

<div class="flex place-items-center place-content-center h-full w-full bg-snow-storm-3 dark:bg-zinc-900">
  <main class="flex flex-col items-center max-w-min sm:max-w-6xl relative gap-6 text-xs sm:text-base" >
    <Editor>
      <Code></Code>
    </Editor>
  </main>
</div>
