<script>
  // Components
  import Section from '../../components/404Section.svelte';
  import NumberColumn from '../../components/NumberColumn.svelte';

  // Colours
  import { lavendar, rhino } from '../../styles/colors';

  export let settings;
  export const homeMarginOffset = 2000; // TODO - This is not ideal, just making it big enough for most screens and disabling scrolling... Works but not tidy.
</script>

<style lang="sass">
  @use '../../styles/numberColumn.sass'
</style>

<svelte:head>
  <title>404 Page Not Found</title>
  <meta name="description" content="Page Not Found" />
  <link href="{settings.origin}/404/" rel="canonical" />
</svelte:head>

<div class="numberColumnContainer">
  <NumberColumn hydrate-client={{ color: rhino, highlight: lavendar, offset: homeMarginOffset }} />
  <Section/>
</div>
