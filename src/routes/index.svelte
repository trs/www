<script context="module" lang="ts">
	export const prerender = true;
	export const hydrate = false;
	export const ssr = true;

  import {getPinnedRepositories} from '$lib/services/github';
  import type {PinnedRepository} from '$lib/services/github';
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const pinnedRepositories = await getPinnedRepositories(fetch);

    return {
      props: {
        pinnedRepositories
      }
    };
  }
</script>

<script lang="ts">
  import Editor from '$lib/components/editor.svelte';
  import Code from '$lib/components/code.svelte';
  import Avatar from '$lib/components/avatar.svelte';

  export let pinnedRepositories: PinnedRepository[] = [];
</script>

<svelte:head>
	<title>Tyler Stewart</title>
</svelte:head>

<main class="flex flex-col items-center max-w-6xl relative gap-6">
  <!-- <Avatar /> -->

  <Editor>
    <Code pinnedRepositories={pinnedRepositories}></Code>
  </Editor>
</main>