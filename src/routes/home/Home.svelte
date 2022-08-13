<script>
  // Components
  import HomeSection from '../../components/HomeSection.svelte';
  import NumberColumn from '../../components/NumberColumn.svelte';

  // Colours
  import { lavendar, rhino } from '../../styles/colors';

  export let settings;
  export const homeMarginOffset = 124; //Top and bottom pixel margin offset
</script>

<style lang="sass">
  @use '../../styles/numberColumn.sass'
</style>

<svelte:head>
  <title>My Projects and Experience - Joaquim Gomez</title>
  <meta name="description" content="My previous experience and projects" />
  <link href="{settings.origin}/" rel="canonical" />
</svelte:head>

<div class="numberColumnContainer">
  <NumberColumn hydrate-client={{color:rhino, highlight:lavendar, offset: homeMarginOffset}} />
  <HomeSection hydrate-client={{}} />
</div>
