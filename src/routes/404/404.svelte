<script>
  // Colours
  import { froly } from '../../styles/colors';

  export let settings;
</script>

<style lang="sass">
  main
    display: flex
    align-items: center
    justify-content: center
    height: 100vh
    overflow: hidden
    flex-direction: column

  h1
    margin: 4rem 0
    text-align: center

  h2
    font-size: 2.5rem
    margin-top: 1rem
    margin-bottom: 0
</style>

<svelte:head>
  <title>404 Page Not Found</title>
  <meta name="description" content="Page Not Found" />
  <link href="{settings.origin}/404/" rel="canonical" />
</svelte:head>

<main>
  <h1 style:color={froly}>404 Not Found</h1>
  <a class="underline" href="/"><h2>Home Page</h2></a>
</main>
