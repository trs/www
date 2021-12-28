<script lang="ts">
  import type {PinnedRepository} from '$lib/services/github';

  export let pinnedRepositories: PinnedRepository[] = [];
</script>

<div class="select-none">
  <code class="flex flex-col  text-zinc-800 dark:text-zinc-200 max-w-lg overflow-x-scroll whitespace-nowrap">
    <span class="py-0.5">
      <span class="token keyword">class</span>
      <span class="token class-name">TylerStewart</span>
      <span class="token keyword">extends</span>
      <span class="token class-name">SoftwareDeveloper</span>
      <span class="token punctuation">&lbrace;</span>
    </span>
    <span class="translate-x-6 py-0.5">
      <span class="token keyword mr-[-0.1rem]">public</span>
      <a class="w-fit hover:bg-zinc-50 dark:hover:bg-zinc-600 rounded-md py-0.5 px-1" href="https://github.com/trs" target="_blank" rel="noreferrer nofollow noopener">
        github
        <span class="token operator">=</span>
        <span class="token string">'trs'</span><span class="token punctuation">;</span>
      </a>
    </span>
    <span class="translate-x-6 py-0.5">
      <span class="token keyword mr-[-0.1rem]">public</span>
      <a class="w-fit hover:bg-zinc-50 dark:hover:bg-zinc-600 rounded-md py-0.5 px-1" href="https://www.linkedin.com/in/hello-trs/" target="_blank" rel="noreferrer nofollow noopener">
        linkedin
        <span class="token operator">=</span>
        <span class="token string">'hello-trs'</span><span class="token punctuation">;</span>
      </a>
    </span>
    <span class="translate-x-6 py-0.5">
      <span class="token keyword mr-[-0.1rem]">public</span>
      <a class="w-fit hover:bg-zinc-50 dark:hover:bg-zinc-600 rounded-md py-0.5 px-1" href="mailto:hello@tylerstewart.ca" target="_blank" rel="noreferrer nofollow noopener">
        email
        <span class="token operator">=</span>
        <span class="token string">'hello@tylerstewart.ca'</span><span class="token punctuation">;</span>
      </a>
    </span>

    {#if pinnedRepositories.length > 0}
    <span>&nbsp;</span>
    <span class="translate-x-6 py-0.5">
      <span class="token keyword">public</span>
      projects
      <span class="token operator">=</span>
      [
    </span>

    {#each pinnedRepositories as repo}
    <!-- <span class="pl-11"> -->
      <a class="translate-x-11 w-fit hover:bg-zinc-50 dark:hover:bg-zinc-600 rounded-md py-0.5 px-1" href="{repo.url}" target="_blank" rel="noreferrer nofollow noopener">
        <span class="token string">'{repo.name}'</span>,
        <span class="token comment">// {repo.description}</span>
      </a>
    <!-- </span> -->
    {/each}

    <span class="pl-6">
      ];
    </span>
    {/if}

    <span class="py-0.5">
      <span class="token punctuation">&rbrace</span>
    </span>
    <span class="py-0.5 h-5 self-start rounded-md border-[1px] border-zinc-700 dark:border-zinc-300 animate-[blink_1s_ease-in-out_infinite]" />
  </code>
</div>

<style>
.token.class-name {
  @apply dark:text-teal-400 text-teal-600;
}
.token.keyword {
  @apply dark:text-sky-500 text-sky-700;
}
.token.punctuation {
  @apply dark:text-zinc-100 text-zinc-700;
}
.token.string {
  @apply dark:text-orange-400 text-orange-500;
}
.token.comment {
  @apply dark:text-zinc-400 text-zinc-500;
}
</style>
